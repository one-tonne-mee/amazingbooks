import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import BookListCard from '../../components/BookListCard/BookListCard';
import { connect } from 'react-redux';
import { VIEW_TYPES } from '../../utils/constants';
import './Books.css';
const mapStateToProps = state => {
  return { books: state.books };
};

const Books = ({ books, viewFilter, viewType }) => {
  return (
    <div className="flex-container">
      {books
        .filter(book => {
          let { filterKey, filterValue, filterType } = viewFilter;
          switch (filterType) {
            case 'boolean':
              return filterValue === !!book[filterKey];
            case 'string':
              return (
                book[filterKey] &&
                book[filterKey]
                  .toLowerCase()
                  .includes(filterValue.toLowerCase())
              );
            case 'exists':
              return true; // short circuit to cater for all books

            // other possible cases, 'GT', 'LT'
            default:
              return false;
          }
        })
        .map(book => {
          if (viewType === VIEW_TYPES.GRID) {
            return <BookListCard key={book.key} book={book} />;
          }
          return <BookCard key={book.key} book={book} />;
        })}
    </div>
  );
};

export default connect(mapStateToProps)(Books);
