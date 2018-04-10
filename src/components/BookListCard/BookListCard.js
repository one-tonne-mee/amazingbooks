import React from 'react';
import Ratings from 'react-ratings';
import './BookListCard.css';
import ActionRow from '../ActionRow/ActionRow';
const BookListCard = ({ book }) => {
  return (
    <div className="Book-List-Card">
      <div className="Book-List-Cover">
        <img
          className="Image"
          src={book['cover-img']}
          alt={'Cover for ' + book.name}
        />
      </div>
      <div className="Book-List-Summary">
        <div className={'Book-List Title'}>{book.name}</div>
        <div className={'Book-List Author'}>{book.author}</div>
        <div className="Book-List ActionRow">
          <ActionRow book={book} />
        </div>
        <div className={'Book-List Rating'}>
          <Ratings defaultRatings={book.rating} totalRating={book.rating} />
        </div>
        <div className={'Book-List Genre-Row'}>
          <span className="Genre"> Genre: </span>
          {book.genre}
        </div>
        <div className={'Book-List Description'}>{book.description}</div>
      </div>
    </div>
  );
};

export default BookListCard;
