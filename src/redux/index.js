import { combineReducers, createStore } from 'redux'
import allbooks from './books/allbooks'

const app = combineReducers({
  allbooks
})

export default createStore(
  app
)
