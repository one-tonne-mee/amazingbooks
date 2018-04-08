import React from 'react'
import BookCard from '../../components/BookCard/BookCard'
import { connect } from 'react-redux'
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

const Books = ({books , viewFilter }) => {
  return (
    <div className="flex-container">
      {
        books
        // .filter( book => {
        //   let { filterKey, filterValue, filterType } = viewFilter
        //   switch( filterType ) {
        //     case 'boolean':
        //       return filterValue === !!book[filterKey]
        //     case 'string':
        //       return book[filterKey].includes(filterValue)
        //     case 'exists':
        //       return true // short circuit to cater for all books
        //     // other possible cases, 'GT', 'LT'
        //     default:
        //       return false
        //   }
        // })
        .map( book => {
          return (<BookCard key={book.key} book={book}/>)
        })
      }
    </div>
  )
}

export default connect(mapStateToProps)(Books)
