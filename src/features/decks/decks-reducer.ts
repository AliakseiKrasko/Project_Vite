import { Decks } from './decks-api.ts'

const initialState = {
  decks: [] as Decks[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS_ACTIVE':
      return {
        ...state,
        decks: action.decks,
      }
    case 'ADD_DECKS_AC':
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDecksAC>

export const setDecksAC = (decks: Decks[]) => ({
  type: 'SET_DECKS_ACTIVE' as const,
  decks,
})

export const addDecksAC = (deck: Decks) => ({
  type: 'ADD_DECKS_AC' as const,
  deck,
})
