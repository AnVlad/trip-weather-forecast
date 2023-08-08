import React, { useRef } from 'react';

import style from './WeekForecast.module.css';

import DayOfWeekCard from './DayOfWeekCard';
import { useSelector } from 'react-redux';

const WeekForecast = () => {
  const currentCityWeatherByDays = useSelector(
    (state) => state.currentCity?.weather?.days
  );

  const scrollButtonRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollButtonRef.current.scrollLeft += scrollOffset;
  };

  if (!currentCityWeatherByDays) return null;
  return (
    <div className={style['week-information']}>
      <div className={style['week-information-header']}>
        <h2 className={style.week}>Week</h2>
        <div className={style['scroll-week-buttons']}>
          <button
            className={style['scroll-button']}
            onClick={() => scroll(-164 * 3)}>
            {'<'}
          </button>
          <button
            className={style['scroll-button']}
            onClick={() => scroll(164 * 3)}>
            {'>'}
          </button>
        </div>
      </div>
      <div className={style.list} ref={scrollButtonRef}>
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
