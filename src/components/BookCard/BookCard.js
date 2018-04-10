import React from 'react';
import ImageLoader from 'react-load-image';
import ActionRow from '../ActionRow/ActionRow';

import './BookCard.css';

function Preloader() {
  return <img src="spinner.gif" />;
}

const BookCard = ({ book }) => {
  return (
    <div className="flex-item">
      <div className="Title-Box"> {book.name} </div>
      <ImageLoader className="Background" src={book['cover-img']}>
        <img className="Book-Cover" />
        <div> Something went wrong... </div>
        <Preloader />
      </ImageLoader>
      <ActionRow book={book} />
    </div>
  );
};
export default BookCard;
