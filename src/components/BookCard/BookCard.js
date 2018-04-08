import React from 'react'
import './BookCard.css'
const BookCard = ({book}) => {
  return (
    <div className="flex-item">
      <span className="Title-Box"> { book.name } </span>
      <img className="Book-Cover" src={book['cover-img']} />
    </div>
  )
}
export default BookCard
