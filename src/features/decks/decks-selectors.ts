import { AppRootState } from '../../app/store.ts'

export const deckSelectors = (state: AppRootState) => state.decksReducer.decks
