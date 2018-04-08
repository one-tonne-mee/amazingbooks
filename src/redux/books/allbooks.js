import { findItemIndexByKey, removeItemByIndex, toggleProperties } from '../reducerUtil.js'

export default (state = [], action) => {
  let actionableIndex
  switch(action.type) {
    case 'SET_BOOKS':
      return action.value
    case 'ADD':
      return [...state, action.value]
    case 'REMOVE':
      actionableIndex = findItemIndexByKey(state, action.value.key)
      return removeItemByIndex(state, actionableIndex)
    case 'TOGGLE_FAVORITES':
      actionableIndex = findItemIndexByKey(state, action.value)
      return toggleProperties(state, actionableIndex, 'isFavorite')
    case 'TOGGLE_WISHLIST':
      actionableIndex = findItemIndexByKey(state, action.value)
      return toggleProperties(state, actionableIndex, 'isWishList')
    case 'FLUSH':
      return []
    // other possible cases: flush wishlist, flush favoritelist
    default:
      return []
  }
}
