import React, { Component } from 'react';
import VerticalSidebar from './VerticalSidebar/VerticalSidebar'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazing Books</h1>
        </header>
        <div className="App-wrapper">
          <VerticalSidebar className="Sidebar" />
        </div>
      </div>
    );
  }
}

export default Main
