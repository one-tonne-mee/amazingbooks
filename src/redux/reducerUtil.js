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

export function setProperties(state, itemIdx, key, value) {
  let targetItem = state.slice(itemIdx, itemIdx+1)[0]
  targetItem[key] = value
  return [
    ...state.slice(0,itemIdx),
    targetItem,
    ...state.slice(itemIdx+1, state.length)
  ]
}

export function toggleProperties(state, itemIdx, key) {
  let targetItem = state.slice(itemIdx, itemIdx+1)[0]
  let toggledPropValue = targetItem[key] ? false : true
  let nextTarget = {}
  nextTarget[key] = toggledPropValue
  return [
    ...state.slice(0,itemIdx),
    Object.assign({}, targetItem, nextTarget),
    ...state.slice(itemIdx+1, state.length)
  ]
}
