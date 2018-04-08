import reducerFactory from './baseBookReducer'
const definitions = { 
  ADD_ACTION: 'ADD_WISHLIST', 
  REMOVE_ACTION: 'REMOVE_WISHLIST', 
  FLUSH_ACTION: 'FLUSH_WISHLIST'
}

export default reducerFactory(definitions)