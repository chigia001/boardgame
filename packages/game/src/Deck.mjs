import _ from 'lodash/fp'
import Card, {CARD_SUITS, CARD_RANKS} from './Card'
import CardStack from './CardStack'

export default class Deck extends CardStack {
  constructor () {
    let cards = _.flatMap((suit) => _.map((rank) => new Card(suit, rank), CARD_RANKS), CARD_SUITS)
    super(cards)
  }
}
