import Dealer, { CARD_BACKGROUND, ICard, IDeck } from '@/services/dealer';
import { translateSuit, translateValue } from '@/services/translation';
import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const dealer = new Dealer();

function App() {
  const [card, setCard] = useState<ICard | null>(null);
  const [deck, setDeck] = useState<IDeck>({
    deck_id: '',
    remaining: 0,
    shuffled: false,
  });

  const shuffleDeck = async (): Promise<void> => {
    try {
      setDeck(await dealer.shuffle());
      setCard(null);
    } catch (error) {
      console.error('Falha ao embaralhar:', error);
    }
  };

  const drawCard = async (): Promise<void> => {
    try {
      setDeck({ ...deck, remaining: deck.remaining - 1, shuffled: deck.remaining > 1})
      setCard(await dealer.draw());
    } catch (error) {
      console.error('Falha ao comprar carta:', error);
    }
  };

  return (
    <Container>
      {/* BARALHO DE CARTAS */}
      <Grid container justifyContent="center" alignItems="center" direction={'column'} my={1}>
        <Grid item my={2}>
          <Typography variant="h4" align="center" my={1}>
            Simulador de baralhos
          </Typography>
          <Typography variant="h5" align="center">
            DNC Treinamentos
          </Typography>
        </Grid>
        
        <Button variant="contained" onClick={shuffleDeck} style={{ margin: 'auto' }}>
          {deck.deck_id === '' ? 'Novo baralho' : deck.shuffled ? 'Embaralhar novamente' : 'Embaralhar'}
        </Button>
        {deck.shuffled && (
          <>
            <Container style={{ textAlign: 'center', marginTop: '20px' }}>
              <img src={CARD_BACKGROUND} style={{ maxWidth: '100%', borderRadius: '5px' }} />
              <Typography variant="h6" align="center" hidden={deck.deck_id === ''}>
                ID: {deck.deck_id} - Cartas restantes: {deck.remaining}
              </Typography>
            </Container>
            <Grid item my={2}>
              <Button variant="contained" onClick={drawCard} disabled={!deck.shuffled} style={{ margin: 'auto'}}>
                Comprar carta
              </Button>
            </Grid>
          </>
        )}

        {/* CARTA COMPRADA */}
        {card && (
          <>
            <Typography variant="h4" align="center">
              Carta comprada
            </Typography>
            <Container style={{ textAlign: 'center', marginTop: '20px' }}>
              <img src={card.image} alt={card.code} style={{ maxWidth: '100%', borderRadius: '5px' }} />
              <Typography variant="h6" align="center">
                {translateValue(card.value) + " de " + translateSuit(card.suit)}
              </Typography>
            </Container>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default App;
