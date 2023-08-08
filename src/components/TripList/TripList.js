import React from 'react';

import style from './TripList.module.css';

import TripCard from './TripCard';
import AddTripCard from './AddTripCard';

import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../Slicers/currentCitySlice';

const TripList = () => {
  const dispatch = useDispatch();

  const tripListState = useSelector((state) => state.tripList);
  const searchTrip = useSelector((state) => state.searchByName.searchTrip);
  const activeCity = useSelector((state) => state.currentCity);
  const sortByType = useSelector((state) => state.sort);

  const filteredTripList = tripListState.filter((trip) =>
    trip.city.toLowerCase().includes(searchTrip.toLowerCase())
  );

  const sortedTripList =
    sortByType === 'byDate'
      ? filteredTripList.sort(
          (fstTrip, secTrip) =>
            new Date(fstTrip.startDate) - new Date(secTrip.startDate)
        )
      : filteredTripList;

  return (
    <div className={style.list}>
      {sortedTripList.map((city) => {
        return (
          <TripCard
            currentCity={city}
            key={city.id}
            active={activeCity.city === city.city}
            onClick={() => dispatch(setCity(city))}
          />
        );
      })}
      <AddTripCard />
    </div>
  );
};

export default TripList;
