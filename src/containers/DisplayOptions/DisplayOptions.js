import React from "react";
import "./DisplayOptions.css";

const DisplayOptions = ({ setSearchFilter }) => {
  return (
    <div className="Display-Options">
      <input
        type="text"
        className="PushLeft"
        onChange={event => setSearchFilter(event.target.value)}
      />
      <div className="PushRight"> &nbsp; </div>
      <div className="Options-Icons-Container">
        <span> square</span> <span> hambu </span>
      </div>
    </div>
  );
};

export default DisplayOptions;
