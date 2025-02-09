import { AddDecksParams, decksAPI } from './decks-api.ts'
import { AppDispatch } from '../../app/store.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDecksTC = (params: AddDecksParams) => async (dispatch: Dispatch) => {
  return decksAPI.addDecks(params).then((res) => {
    dispatch(addDecksAC(res.data))
  })
}
