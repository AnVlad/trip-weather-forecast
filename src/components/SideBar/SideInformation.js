import React, { useEffect } from 'react';
import style from './SideInformation.module.css';

import { useDispatch, useSelector } from 'react-redux';

import Timer from './Timer';
import WeatherIcons from '../UI/WeatherIcons';
import getDayOfWeek from '../../helpers/getDayOfWeek';
import weather from '../../services/weather';
import { setCurrentWeather } from '../../Slicers/tripListSlice';
import { setCity } from '../../Slicers/currentCitySlice';
import { changeThemeMode } from '../../Slicers/booleanStateSlice';

const SideInformation = () => {
  const currentCity = useSelector((state) => state.currentCity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentCity?.city) return;
    if (
      !('currentWeather' in currentCity) ||
      currentCity.currentWeather === undefined
    ) {
      const getCurrentWeather = async () => {
        const currentDate = new Date();
        const toStringCurrentDay = currentDate.toISOString().split('T')[0];
        const result = await weather.getWeather(
          toStringCurrentDay,
          toStringCurrentDay,
          currentCity.city
        );

        console.log(result.data);

        const updatedCity = { ...currentCity, currentWeather: result.data };

        dispatch(setCurrentWeather(updatedCity));
        dispatch(setCity(updatedCity));
      };

      getCurrentWeather();
    }
  }, [currentCity, dispatch]);

  if (!currentCity) return null;

  return (
    <aside className={style['side-information']}>
      <img
        onClick={() => {
          dispatch(changeThemeMode());
        }}
        className={style['penguin-icon']}
        src='https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-1024.png'
        alt='penguin icon'
      />
      <div className={style['main-information']}>
        <h1>{getDayOfWeek(currentCity?.currentWeather?.days[0]?.datetime)}</h1>
        <p className={style['temperature-information']}>
          <WeatherIcons
            icon={currentCity?.currentWeather?.days[0]?.icon}
            size={2}
          />
          {currentCity.currentWeather?.days[0]?.temp}
          <span>°C</span>
        </p>
        <p className={style['location']}>{currentCity.city}</p>
      </div>
      <Timer currentCity={currentCity} />
    </aside>
  );
};

export default SideInformation;
