import { CardSuit, CardValue } from "./dealer";

const suitTranslations: Record<CardSuit, string> = {
  HEARTS: 'Copas',
  DIAMONDS: 'Ouros',
  CLUBS: 'Paus',
  SPADES: 'Espadas',
};

export function translateSuit(suit: CardSuit): string {
  return suitTranslations[suit];
}

const valueTranslations: Record<CardValue, string> = {
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

export function translateValue(value: CardValue): string {
  return valueTranslations[value];
}
