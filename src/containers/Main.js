import React, { Component } from 'react';
import VerticalSidebar from './VerticalSidebar/VerticalSidebar'
import Books from './Books/Books'
import DisplayOptions from './DisplayOptions/DisplayOptions'
import './Main.css'
import bookService from '../services/bookService'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: async function(books) {
      dispatch({
        type: 'SET_BOOKS',
        value: books
      })
    }
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // viewFilter: {
      //   filterType: 'boolean',
      //   filterKey: 'isFavorite',
      //   filterValue: true
      // }
      viewFilter: { filterType : 'exist'}
    }
  }

  async componentDidMount() {
    const booksArray = await bookService.getBooks()
    await this.props.onGetBooks(booksArray)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazing Books</h1>
        </header>
        <div className="App-wrapper">
          <VerticalSidebar className="Sidebar" />
          <div className="Main">
            <DisplayOptions />
            <Books className="Books" viewFilter={this.state.viewFilter} />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(null, mapDispatchToProps )(Main)
