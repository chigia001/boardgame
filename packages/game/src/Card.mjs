export const CARD_SUITS = ['DIAMOND', 'CLUB', 'HEART', 'SPADE']

export const CARD_RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

export const createCard = (suit, rank, isFaceUp = true) => ({
  suit, rank, isFaceUp
})

export const turnFace = (card, toFaceUp) => ({...card, isFaceUp: turnFace})
