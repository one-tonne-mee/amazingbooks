import React from 'react'
import { connect } from 'react-redux'
import './VerticalSidebar.css'

const mapStateToProps = state => {
  return { books: state.books }
}
const SideBar = ({ books }) => {
  return (
    <div className="Vertical">
      <span className="Category">All Books &nbsp; { books.length }</span>
      <span className="Category">Favorites</span>
      <span className="Category">Wish List</span>
      <span className="Category Filler"> &nbsp;</span>
    </div>
  )
}

export default connect(mapStateToProps)(SideBar)
