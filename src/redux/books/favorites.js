import reducerFactory from './baseBookReducer'
const definitions = { 
  ADD_ACTION: 'ADD_FAVORITES', 
  REMOVE_ACTION: 'REMOVE_FAVORITES', 
  FLUSH_ACTION: 'FLUSH_FAVORITES'
}

export default reducerFactory(definitions)