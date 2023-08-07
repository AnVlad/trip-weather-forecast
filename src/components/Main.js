import React from 'react';

import TripList from './TripList/TripList';
import WeekForecast from './WeekForecast/WeekForecast';
import Header from './Header';
import SearchBar from './SearchBar';

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div>
        <SearchBar />
        <TripList />
        <WeekForecast />
      </div>
    </div>
  );
};

export default Main;
