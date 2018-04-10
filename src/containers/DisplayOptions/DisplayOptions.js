import React from "react";
import "./DisplayOptions.css";
import { DEFAULT_FILTER } from "../../utils/constants";

const DisplayOptions = ({ setSearchFilter, viewFilter }) => {
  return (
    <div className="Display-Options">
      <input
        type="text"
        className="PushLeft"
        onChange={event => setSearchFilter(event.target.value)}
      />
      <div className="PushRight"> &nbsp; </div>
      {viewFilter !== DEFAULT_FILTER && (
        <div className="FilterKV">
          <span className="Pills">{viewFilter.filterKey}</span>
          {viewFilter.filterValue.length > 0 && (
            <span className="Pills">{viewFilter.filterValue}</span>
          )}
        </div>
      )}

      <div className="Options-Icons-Container">
        <span> square</span> <span> hambu </span>
      </div>
    </div>
  );
};

export default DisplayOptions;
