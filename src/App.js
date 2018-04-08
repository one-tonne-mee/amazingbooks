import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux'
import './App.css';
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
