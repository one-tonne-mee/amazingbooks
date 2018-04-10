import React from 'react';
import { connect } from 'react-redux';
const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: async function(key, isFave) {
      if (isFave) {
        await dispatch({
          type: 'DECREMENT_FAVE',
          value: null
        });
      } else {
        await dispatch({
          type: 'INCREMENT_FAVE',
          value: null
        });
      }
      await dispatch({
        type: 'TOGGLE_FAVORITES',
        value: key
      });
    },
    toggleWishlist: async function(key, isWished) {
      if (isWished) {
        await dispatch({
          type: 'DECREMENT_WISHLIST',
          value: null
        });
      } else {
        await dispatch({
          type: 'INCREMENT_WISHLIST',
          value: null
        });
      }
      await dispatch({
        type: 'TOGGLE_WISHLIST',
        value: key
      });
    }
  };
};

const ActionRow = ({ book, toggleFavorite, toggleWishlist }) => {
  return (
    <div className="Actions-Box">
      <span className="Spacer"> &nbsp; </span>
      <a
        onClick={toggleWishlist.bind(this, book.key, book.isWishList || false)}
      >
        <img
          src={book.isWishList ? 'plus_red.svg' : 'plus_black.svg'}
          className={book.isWishList ? 'Wished' : 'Not-Wished'}
        />
      </a>
      <a
        onClick={toggleFavorite.bind(this, book.key, book.isFavorite || false)}
      >
        <img
          src={book.isFavorite ? 'heart_filled.svg' : 'heart_empty.svg'}
          className={book.isFavorite ? 'Faved' : 'Not-Faved'}
        />
      </a>
      <span className="Spacer"> &nbsp; </span>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ActionRow);
