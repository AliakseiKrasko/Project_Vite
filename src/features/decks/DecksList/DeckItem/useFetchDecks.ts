import { useAppDispatch } from '../../../../app/store.ts'
import { useSelector } from 'react-redux'
import { deckSelectors } from '../../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(deckSelectors)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return { decks }
}
