export const CARD_SUITS = ['DIAMOND', 'CLUB', 'HEART', 'SPADE']

export const CARD_RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

export default class Card {
  constructor (suit, rank) {
    this._suit = suit
    this._rank = rank
    this._isReveal = false
  }

  get suit () {
    return this._isReveal ? this._suit : ''
  }

  get rank () {
    return this._isReveal ? this._rank : ''
  }
}
