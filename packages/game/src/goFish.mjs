import { Game, Random } from 'boardgame.io/core'
import { createCardDeck, dealCard } from './Deck'
import _ from 'lodash/fp'

const INIT_HAND = 5
const overideArrayMerge = _.mergeWith((objValue, srcValue) => {
  if (_.isArray(objValue) || _.isArray(srcValue)) {
    return srcValue
  }
})
// const DRAW_HAND_WHEN_EMPTY = 5

const goFish = Game({
  name: 'go-fish',
  setup (numPlayers) {
    return _.flow(
      createCardDeck,
      Random.Shuffle,
      _.partial(dealCard, [_, numPlayers, INIT_HAND])
    )(false)
  },
  moves: {
    ask (G, ctx, targetPlayer, rank) {
      let currentPlayer = _.get(ctx, 'currentPlayer')
      let currentPlayerHand = _.get(['players', currentPlayer, 'hand'], G)
      let targetPlayerHand = _.get(['players', targetPlayer, 'hand'], G)
      let matchCards = _.filter({ rank }, targetPlayerHand)

      if (_.isEmpty(matchCards)) {
        return _.merge(G,
          {
            players: {
              [currentPlayer]: {
                askFail: true
              }
            }
          }
        )
      }
      return overideArrayMerge(G, {
        players: {
          [currentPlayer]: {
            hand: _.concat(currentPlayerHand, matchCards)
          },
          [targetPlayer]: {
            hand: _.pullAll(matchCards, targetPlayerHand)
          }
        }
      })
    }
  }
})

export default goFish
