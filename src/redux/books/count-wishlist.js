export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_WISHLIST":
      return state + 1;
    case "DECREMENT_WISHLIST":
      return state - 1;
    default:
      return state;
  }
};
