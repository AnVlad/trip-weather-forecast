import React from 'react';

import style from './TripCard.module.css';

const TripCard = ({ currentCity, active, onClick }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <img
        className={style.image}
        src={currentCity.img}
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
