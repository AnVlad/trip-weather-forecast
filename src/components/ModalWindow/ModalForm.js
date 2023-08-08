import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import style from './ModalForm.module.css';

import getMinMaxDate from '../../helpers/getMinMaxDate';
import cityList from '../../cityList';
import weather from '../../services/weather';
import SVGDownArrow from '../UI/SVGDownArrow';

const ModalForm = ({ setNewTripData }) => {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { minDate, maxDate } = getMinMaxDate();

  const tripList = useSelector((state) => state.tripList);
  const listOfUsedCities = tripList.map((city) => city.city);

  const filteredList = cityList.filter(
    (city) => !listOfUsedCities.includes(city.city)
  );

  useEffect(() => {
    if (!city || !startDate || !endDate) return;

    const addNewCityToList = async () => {
      const currentCity = cityList.find(
        (cityInList) => cityInList.city === city
      );

      if (!currentCity) return;

      const result = await weather.getWeather(startDate, endDate, city);

      const newTrip = {
        ...currentCity,
        startDate,
        endDate,
        weather: result.data,
      };

      console.log(newTrip);
      setNewTripData(newTrip);
    };

    addNewCityToList();
  }, [city, startDate, endDate, setNewTripData]);

  return (
    <form className={style['body-modal-form']}>
      <div className={style['form-sector']}>
        <label htmlFor='city'>
          <span>*</span>City
        </label>
        <div className={style['form-input']}>
          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className={style['form-select']}>
            <option value='' disabled>
              Please select a city
            </option>
            {filteredList.map((city) => {
              return (
                <option key={city.id} value={city.city}>
                  {city.city}
                </option>
              );
            })}
          </select>
          <SVGDownArrow style={{ color: '#909090', width: 20 }} />
        </div>
      </div>

      <div className={style['form-sector']}>
        <label htmlFor='start-date'>
          <span>*</span>Start Date
        </label>
        <div className={style['form-input']}>
          <input
            id='start-date'
            type='text'
            placeholder='Select date'
            value={startDate < maxDate ? startDate : maxDate}
            onChange={(event) => setStartDate(event.target.value)}
            onFocus={(event) => {
              event.target.type = 'date';
            }}
            onBlur={(event) => {
              if (!startDate) event.target.type = 'text';
              if (!startDate) return;
              if (startDate < minDate) setStartDate(minDate);
              if (startDate > maxDate) setStartDate(maxDate);
            }}
            min={minDate}
            max={endDate || maxDate}
          />
        </div>
      </div>

      <div className={style['form-sector']}>
        <label htmlFor='end-date'>
          <span>*</span>End Date
        </label>
        <div className={style['form-input']}>
          <input
            id='end-date'
            type='text'
            placeholder='Select date'
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            onFocus={(event) => (event.target.type = 'date')}
            onBlur={(event) => {
              if (!endDate) event.target.type = 'text';
              if (!endDate) return;
              if (endDate < startDate) setEndDate(startDate);
              if (endDate > maxDate) setEndDate(maxDate);
            }}
            min={startDate || minDate}
            max={maxDate}
          />
        </div>
      </div>
    </form>
  );
};

export default ModalForm;
