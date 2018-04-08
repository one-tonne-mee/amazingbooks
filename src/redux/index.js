import { combineReducers, createStore } from 'redux'
import books from './books/allbooks'

const app = combineReducers({
  books
})

export default createStore(
  app
)
