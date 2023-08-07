import React from 'react';

import style from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTrip } from '../Slicers/searchSlice';
import SVGSearch from './UI/SVGSearch';

const SearchBar = () => {
  const searchTrip = useSelector((state) => state.searchByName.searchTrip);
  const dispatch = useDispatch();

  return (
    <div className={style['search-input']}>
      <SVGSearch style={{ color: '#000000', width: 20 }} />
      <input
        type='text'
        placeholder='Search your trip'
        value={searchTrip}
        onChange={(event) => dispatch(setSearchTrip(event.target.value))}
      />
    </div>
  );
};

export default SearchBar;
