import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/',
});

export const CARD_BACKGROUND = 'https://deckofcardsapi.com/static/img/back.png';

export type CardSuit = 'HEARTS' | 'DIAMONDS' | 'CLUBS' | 'SPADES';
export type CardValue = 'ACE' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'JACK' | 'QUEEN' | 'KING';

export interface ICard {
  code: string;
  image: string;
  suit: CardSuit;
  value: CardValue;
}

export interface IDeck {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

export default class Dealer {
  deck: IDeck = {
    deck_id: '',
    remaining: 0,
    shuffled: false,
  };

  history: ICard[] = [];

  async shuffle(): Promise<IDeck> {
    const response = 
      this.deck.deck_id === '' ?
        await api.get('deck/new/shuffle/?deck_count=1') :
        await api.get(`deck/${this.deck.deck_id}/shuffle`);

    this.deck.deck_id = response.data.deck_id;
    this.deck.remaining = response.data.remaining;
    this.deck.shuffled = true;

    return this.deck;
  }

  async draw(): Promise<ICard> {
    const response = await api.get(`deck/${this.deck.deck_id}/draw/?count=1`);
    this.history.push(response.data.cards[0]);
    return response.data.cards[0];
  }

  async getHistory(): Promise<ICard[]> {
    return this.history;
  }
}