export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_FAVE":
      return state + 1;
    case "DECREMENT_FAVE":
      return state - 1;
    default:
      return state;
  }
};
