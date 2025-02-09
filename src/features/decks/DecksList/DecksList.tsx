import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { deckSelectors } from '../decks-selectors.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(deckSelectors)

  useEffect(() => {
    decksAPI.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])
  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
