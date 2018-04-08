import React from 'react'
import ImageLoader from 'react-load-image'
import { connect } from 'react-redux'
import './BookCard.css'

function Preloader() {
  return <img src='spinner.gif' />
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: async function(key) {
      dispatch({
        type: 'TOGGLE_FAVORITES',
        value: key
      })
    },
    toggleWishlist: async function(key) {
      dispatch({
        type: 'TOGGLE_WISHLIST',
        value: key
      })
    }
  }
}

const BookCard = ({book, toggleFavorite, toggleWishlist}) => {
  return (
    <div className="flex-item">
      <div className="Title-Box"> { book.name } </div>
      <ImageLoader className="Background" src={book['cover-img']} >
        <img className="Book-Cover"/>
        <div> Something went wrong... </div>
        <Preloader />
      </ImageLoader>
      <div className="Actions-Box">
        <a onClick={toggleFavorite.bind(this,book.key)}> Fave </a>
        <a onClick={toggleWishlist.bind(this,book.key)}> WishList </a>
      </div>
    </div>
  )
}
export default connect(null, mapDispatchToProps)(BookCard)
