import React, { Component } from 'react';
import VerticalSidebar from './VerticalSidebar/VerticalSidebar'
import Books from './Books/Books'
import './Main.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewFilter: {
        filterType: 'exist'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazing Books</h1>
        </header>
        <div className="App-wrapper">
          <VerticalSidebar className="Sidebar" />
          <Books className="Books" viewFilter={this.state.viewFilter} />
        </div>

      </div>
    );
  }
}

export default Main
