import { findItemIndexByKey, removeItemByIndex } from '../reducerUtil.js'

export default function reducerFactory (definitions) {
  const { ADD_ACTION , REMOVE_ACTION, FLUSH_ACTION } = definitions
  return (state = [], action) => {
    let idxToRemove
    switch(action.type) {
      case ADD_ACTION:
        return [...state, action.value]
        
      case REMOVE_ACTION:
        idxToRemove = findItemIndexByKey(state, action.value.key)
        return removeItemByIndex(state, idxToRemove)
        
      case FLUSH_ACTION:
        return []
        
      default:
        return
    }
  }
}