import React, { Component } from "react";
import VerticalSidebar from "./VerticalSidebar/VerticalSidebar";
import Books from "./Books/Books";
import DisplayOptions from "./DisplayOptions/DisplayOptions";
import "./Main.css";
import bookService from "../services/bookService";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    onGetBooks: async function(books) {
      dispatch({
        type: "SET_BOOKS",
        value: books
      });
    }
  };
};

const DEFAULT_FILTER = { filterType: "exists" };
const FAVE_FILTER = {
  filterType: "boolean",
  filterKey: "isFavorite", // TODO use a exported const for here and reducer
  filterValue: true
};
const WISH_FILTER = {
  filterType: "boolean",
  filterKey: "isWishList", // TODO use a exported const for here and reducer
  filterValue: true
};

function createKVFilter(searchString) {
  let [k, v] = searchString.split(":");
  return {
    filterType: "string",
    filterKey: k,
    filterValue: v
  };
}
// todo : autosuggest keys?

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewFilter: DEFAULT_FILTER
    };
  }

  setSearchFilter(searchString) {
    if (searchString.length > 3 && searchString.includes(":")) {
      let viewFilter = createKVFilter(searchString);
      this.setState({ viewFilter });
    }
  }

  setFilterToFavorites() {
    this.setState({ viewFilter: FAVE_FILTER });
  }
  setFilterToWishList() {
    this.setState({ viewFilter: WISH_FILTER });
  }
  setFilterToAll() {
    this.setState({ viewFilter: DEFAULT_FILTER });
  }

  async componentDidMount() {
    const booksArray = await bookService.getBooks();
    await this.props.onGetBooks(booksArray);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Amazing Books</h1>
        </header>
        <div className="App-wrapper">
          <VerticalSidebar
            className="Sidebar"
            setFilterToWishList={this.setFilterToWishList.bind(this)}
            setFilterToFavorites={this.setFilterToFavorites.bind(this)}
            setFilterToAll={this.setFilterToAll.bind(this)}
          />
          <div className="Main">
            <DisplayOptions setSearchFilter={this.setSearchFilter.bind(this)} />
            <Books className="Books" viewFilter={this.state.viewFilter} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
