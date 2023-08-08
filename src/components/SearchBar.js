import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './SearchBar.module.css';

import { setSearchTrip } from '../Slicers/searchSlice';
import SVGSearch from './UI/SVGSearch';
import { setSortType } from '../Slicers/sortSlice';

const SearchBar = () => {
  const searchTrip = useSelector((state) => state.searchByName.searchTrip);
  const dispatch = useDispatch();

  const sortType = useSelector((state) => state.sort);

  return (
    <div className={style['search-input']}>
      <SVGSearch style={{ color: '#000000', width: 20 }} />
      <input
        type='text'
        placeholder='Search your trip'
        value={searchTrip}
        onChange={(event) => dispatch(setSearchTrip(event.target.value))}
      />

      <div className={style['sort-buttons']}>
        {sortType === 'byDefault' ? (
          <button
            className={style['sort-button']}
            onClick={() => dispatch(setSortType('byDate'))}>
            sort by Date
          </button>
        ) : (
          <button
            className={style['sort-button']}
            onClick={() => dispatch(setSortType('byDefault'))}>
            sort by Default
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
