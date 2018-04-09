import { combineReducers, createStore } from "redux";
import books from "./books/allbooks";
import faveCount from "./books/count-fave";
import wishlistCount from "./books/count-wishlist";

const app = combineReducers({
  books,
  faveCount,
  wishlistCount
});

export default createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
