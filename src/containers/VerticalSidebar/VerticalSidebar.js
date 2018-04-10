import React from "react";
import { connect } from "react-redux";
import "./VerticalSidebar.css";
import {
  DEFAULT_FILTER,
  FAVE_FILTER,
  WISH_FILTER,
} from "../../utils/constants";

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
  setFilterToAll,
  viewFilter
}) => {
  return (
    <div className="Vertical">
      <span className="Category">
        <a
          className={viewFilter === DEFAULT_FILTER? 'Active-Link': ''}
          onClick={setFilterToAll}
        >
          All Books &nbsp; ({books.length})
        </a>
      </span>
      <span className="Category">
        <a className={viewFilter === FAVE_FILTER? 'Active-Link': ''} onClick={setFilterToFavorites}> Favorites ({faveCount}) </a>
      </span>
      <span className="Category">
        <a className={viewFilter === WISH_FILTER? 'Active-Link': ''} onClick={setFilterToWishList}> Wishlist ({wishlistCount})</a>
      </span>
      <span className="Category Filler"> &nbsp;</span>
    </div>
  );
};

export default connect(mapStateToProps)(SideBar);
