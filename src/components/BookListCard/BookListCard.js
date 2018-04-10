import React from 'react';
import Ratings from 'react-ratings';
import './BookListCard.css';
import ActionRow from '../ActionRow/ActionRow';
const BookListCard = ({ book, baseClass = 'Book-List' }) => {
  return (
    <div className={baseClass + '-Card'}>
      <div className={baseClass + '-Cover'}>
        <img
          className="Image"
          src={book['cover-img']}
          alt={'Cover for ' + book.name}
        />
      </div>
      <div className={baseClass + '-Summary'}>
        <div className={baseClass + ' Title'}>{book.name}</div>
        <div className={baseClass + ' Author'}>{book.author}</div>
        <div className={baseClass + ' ActionRow'}>
          <ActionRow book={book} />
        </div>
        <div className={baseClass + ' Rating'}>
          <Ratings defaultRatings={book.rating} totalRating={book.rating} />
        </div>
        <div className={baseClass + ' Genre-Row'}>
          <span className="Genre"> Genre: </span>
          {book.genre}
        </div>
        <div className={baseClass + ' Description'}>{book.description}</div>
      </div>
    </div>
  );
};

export default BookListCard;
