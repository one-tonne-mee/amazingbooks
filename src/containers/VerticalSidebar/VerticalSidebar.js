import React from "react";
import { connect } from "react-redux";
import "./VerticalSidebar.css";

const mapStateToProps = state => {
  return {
    books: state.books,
    faveCount: state.faveCount,
    wishlistCount: state.wishlistCount
  };
};
const SideBar = ({
  books,
  faveCount,
  wishlistCount,
  setFilterToFavorites,
  setFilterToWishList,
  setFilterToAll
}) => {
  return (
    <div className="Vertical">
      <span className="Category">
        <a onClick={setFilterToAll}>All Books &nbsp; ({books.length})</a>
      </span>
      <span className="Category">
        <a onClick={setFilterToFavorites}> Favorites ({faveCount}) </a>
      </span>
      <span className="Category">
        <a onClick={setFilterToWishList}> Wishlist ({wishlistCount})</a>
      </span>
      <span className="Category Filler"> &nbsp;</span>
    </div>
  );
};

export default connect(mapStateToProps)(SideBar);
