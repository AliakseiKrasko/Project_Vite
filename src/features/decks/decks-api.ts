import axios from 'axios'
import { decksReducer } from './decks-reducer.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('v2/decks')
  },

  addDecks(params: AddDecksParams) {
    return instance.post<Decks>('v1/decks', params)
  },
}

export type AddDecksParams = {
  name: string
}

export type FetchDecksResponse = {
  items: Decks[]
  pagination: Pagination
}
export type Auhtor = {
  id: string
  name: string
}
export type Decks = {
  isFavorite: boolean
  author: Auhtor
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
