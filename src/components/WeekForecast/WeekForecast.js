import React from 'react';

import style from './WeekForecast.module.css';

import DayOfWeekCard from './DayOfWeekCard';
import { useSelector } from 'react-redux';

const WeekForecast = () => {
  const currentCityWeatherByDays = useSelector(
    (state) => state.currentCity?.weather?.days
  );

  if (!currentCityWeatherByDays) return null;
  return (
    <div className={style['week-information']}>
      <h2 className={style.week}>Week</h2>
      <div className={style.list}>
        {currentCityWeatherByDays.map((day) => {
          return (
            <DayOfWeekCard
              key={day.datetime}
              icon={day.icon}
              tempmax={day.tempmax}
              tempmin={day.tempmin}
              datetime={day.datetime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekForecast;
