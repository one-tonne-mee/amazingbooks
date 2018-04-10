import React from 'react';
import ImageLoader from 'react-load-image';
import ActionRow from '../ActionRow/ActionRow';

import './BookCard.css';

function Preloader() {
  return <img src="spinner.gif" />;
}

const BookCard = ({ book, toggleFavorite, toggleWishlist }) => {
  return (
    <div className="flex-item">
      <div className="Title-Box"> {book.name} </div>
      <ImageLoader className="Background" src={book['cover-img']}>
        <img className="Book-Cover" />
        <div> Something went wrong... </div>
        <Preloader />
      </ImageLoader>
      <ActionRow
        book={book}
        toggleFavorite={toggleFavorite}
        toggleWishlist={toggleWishlist}
      />
    </div>
  );
};
export default BookCard;
