import { CardSuit, CardValue } from "./dealer";

export function translateSuit(suit: CardSuit): string {
  const translations: Record<CardSuit, string> = {
    HEARTS: 'Copas',
    DIAMONDS: 'Ouros',
    CLUBS: 'Paus',
    SPADES: 'Espadas',
  };

  return translations[suit];
}

export function translateValue(suit: CardValue): string {
  const translations: Record<CardValue, string> = {
    ACE: 'Ás',
    2: 'Dois',
    3: 'Três',
    4: 'Quatro',
    5: 'Cinco',
    6: 'Seis',
    7: 'Sete',
    8: 'Oito',
    9: 'Nove',
    10: 'Dez',
    JACK: 'Valete',
    QUEEN: 'Dama',
    KING: 'Rei',
  };

  return translations[suit];
}