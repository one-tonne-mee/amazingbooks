import React from 'react';
import './DisplayOptions.css';
import { DEFAULT_FILTER, VIEW_TYPES } from '../../utils/constants';

const DisplayOptions = ({ setSearchFilter, viewFilter, setViewType }) => {
  return (
    <div className="Display-Options">
      <input
        type="text"
        className="PushLeft"
        onChange={event => setSearchFilter(event.target.value)}
        placeholder="Search using key:values"
      />
      <div className="PushRight"> &nbsp; </div>
      {viewFilter !== DEFAULT_FILTER && (
        <div className="FilterKV">
          <span className="Pills">
            {viewFilter.filterKey.includes('is')
              ? viewFilter.filterKey.replace('is', '')
              : viewFilter.filterKey}
          </span>
          {viewFilter.filterValue.length > 0 && (
            <span className="Pills">{viewFilter.filterValue}</span>
          )}
        </div>
      )}

      <div className="Options-Icons-Container">
        <a onClick={() => setViewType(VIEW_TYPES.GRID)}>
          {' '}
          <img className="Display-Option-Icon" src="Grid.svg" />{' '}
        </a>{' '}
        <a onClick={() => setViewType(VIEW_TYPES.LIST)}>
          {' '}
          <img className="Display-Option-Icon" src="List.svg" />{' '}
        </a>
      </div>
    </div>
  );
};

export default DisplayOptions;
