import React from 'react';

import style from './TripCard.module.css';
import { useSelector } from 'react-redux';

const TripCard = ({ currentCity, active, onClick }) => {
  const themeMode = useSelector((state) => state.booleanState.themeMode);
  return (
    <div className={style.card} onClick={onClick}>
      <img
        className={style.image}
        src={themeMode ? currentCity.img2 : currentCity.img}
        alt={currentCity.city}
      />
      <div className={`${style.information} ${active && style['active']}`}>
        <h4 className={style.name}>{currentCity.city}</h4>
        <p className={style.data}>
          {currentCity.startDate} - {currentCity.endDate}
        </p>
      </div>
    </div>
  );
};

export default TripCard;
