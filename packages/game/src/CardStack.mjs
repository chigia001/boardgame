export default class CardStack {
  constructor (cards) {
    this._cards = cards
  }

  shuffle () {
    let m = this._cards.length
    while (m) {
      let i = Math.floor(Math.random() * m--)
      ;[this._cards[m], this._cards[i]] = [this._cards[i], this._cards[m]]
    }
  }
}
