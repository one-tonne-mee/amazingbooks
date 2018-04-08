import reducerFactory from './baseBookReducer'
const definitions = { 
  ADD_ACTION: 'ADD_ALLBOOKS', 
  REMOVE_ACTION: 'REMOVE_ALLBOOKS', 
  FLUSH_ACTION: 'FLUSH_ALLBOOKS'
}

export default reducerFactory(definitions)