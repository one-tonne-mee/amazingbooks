import { findItemIndexByKey, removeItemByIndex, setProperties } from '../reducerUtil.js'

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
    case 'ADD_TO_FAVORITES':
      actionableIndex = findItemIndexByKey(state, action.value.key)
      return setProperties(state, actionableIndex, 'isFavorite',true)
    case 'REMOVE_FROM_FAVORITES':
      actionableIndex = findItemIndexByKey(state, action.value.key)
      return setProperties(state, actionableIndex, 'isFavorite', false)
    case 'ADD_TO_WISHLIST':
      actionableIndex = findItemIndexByKey(state, action.value.key)
      return setProperties(state, actionableIndex, 'isWishList', true)
    case 'REMOVE_FROM_WISHLIST':
      actionableIndex = findItemIndexByKey(state, action.value.key)
      return setProperties(state, actionableIndex, 'isWishList', false)
    case 'FLUSH':
      return []
    // other possible cases: flush wishlist, flush favoritelist
    default:
      return []
  }
}
