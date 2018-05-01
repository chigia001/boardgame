import _ from 'lodash/fp'
import { CARD_SUITS, CARD_RANKS, createCard } from './Card'

export const creatSet = (rank, isDefaultFaceUp) =>
  _.map(suit => createCard(suit, rank, isDefaultFaceUp), CARD_SUITS)

export const createCardDeck = isDefaultFaceUp =>
  _.flatMap(rank => creatSet(rank, isDefaultFaceUp), CARD_RANKS)

export const dealCard = (deck, numPlayers, maxNoCard) => {
  let totalCardDeal = maxNoCard ? numPlayers * maxNoCard : deck.length
  let players = _.flow(
    _.times(_.identity),
    _.reduce(
      (acc, index) =>
        _.set(
          [index],
          {
            hand: []
          },
          acc
        ),
      {}
    )
  )(numPlayers)

  let newDeck = []
  deck.forEach((element, index) => {
    if (index < totalCardDeal) {
      let player = index % numPlayers
      players[player].hand.push(element)
    } else {
      newDeck.push(element)
    }
  })
  return {
    players,
    deck: newDeck
  }
}

export const sortCard = _.sortBy(
  ({ rank, suit }) =>
    _.indexOf(rank, CARD_RANKS) * 10 + _.indexOf(suit, CARD_SUITS)
)
