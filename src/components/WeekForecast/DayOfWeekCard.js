import React from 'react';

import style from './DayOfWeekCard.module.css';

import WeatherIcons from '../UI/WeatherIcons';
import getDayOfWeek from '../../helpers/getDayOfWeek';

const DayOfWeekCard = ({ tempmax, tempmin, icon, datetime }) => {
  return (
    <div className={style['day-information']}>
      <h4 className={style['day-name']}>{getDayOfWeek(datetime)}</h4>
      <WeatherIcons icon={icon} />

      <p className={style['temperature']}>
        {tempmax}°/{tempmin}°
      </p>
    </div>
  );
};

export default DayOfWeekCard;
