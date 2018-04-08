import React from 'react'
import ImageLoader from 'react-load-image'
import './BookCard.css'

function Preloader() {
  return <img src='spinner.gif' />
}

const BookCard = ({book}) => {
  return (
    <div className="flex-item">
      <div className="Title-Box"> { book.name } </div>
      <ImageLoader src={book['cover-img']} >
        <img className="Book-Cover"/>
        <div> Something went wrong... </div>
        <Preloader />
      </ImageLoader>
    </div>
  )
}
export default BookCard
