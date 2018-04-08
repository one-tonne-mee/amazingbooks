export function findItemIndexByKey(state, key) {
  return state.findIndex((book) => {
    return book.key === key
  })
}

export function removeItemByIndex(state, itemIdx) {
  let nextState
  if(itemIdx !== state.length) {
    nextState = [...state.slice(0,itemIdx),...state.slice(itemIdx+1, state.length)]  
  } else {
    nextState = [...state]
    nextState.pop()
  }
  return nextState
}