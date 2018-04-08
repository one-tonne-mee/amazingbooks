import { combineReducers, createStore } from 'redux'
import allbooks from './allbooks'
import favorites from './favorites'
import wishlist from 'wishlist'

const app = combineReducers({
  allbooks,
  favorites,
  wishlist
})

export const store = createStore(
  app
)
