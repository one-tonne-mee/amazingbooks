import React from 'react';
import ImageLoader from 'react-load-image';
import ActionRow from '../ActionRow/ActionRow';

import './BookCard.css';

function Preloader() {
  return <img src="spinner.gif" />;
}
const NO_OP = () => {};

const BookCard = ({ book, showDetailCard = NO_OP }) => {
  return (
    <div className="flex-item">
      <div className="Title-Box">
        <a onClick={() => showDetailCard(book)}>{book.name}</a>{' '}
      </div>
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
