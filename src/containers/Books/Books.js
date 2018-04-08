import React from 'react'
import { connect } from 'react-redux'
import BookCard from '../components/BookCard/BookCard'
import './Books.css'
const mapStateToProps = state => { 
  return { books: state.books}
}

// each book looks like this

// {
//    "key": "b1",
//    "name": "Bourne Identity",
//    "author": "auhor name",
//    "cover-img": "cover.img",
//    "genre": "mystery",
//    "rating": 3.5,
//    "description": ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
// }

const Books = ({books}) => {
  return (
    <div className="flex-container">
      {books.map( book => {
        <BookCard book={book}/>
      })}
    </div>
  ) 
}

export default connect(mapStateToProps)(Books)