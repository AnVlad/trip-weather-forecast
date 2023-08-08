import React, { useEffect, useState } from 'react';

import style from './Timer.module.css';
import getTimer from '../../helpers/getTimer';
import toDoubleDigits from '../../helpers/toDoubleDigits';

const Timer = ({ currentCity }) => {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const { days, hours, minutes, seconds } = getTimer(currentCity.startDate);

    setTime({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        // To clear the interval, when timer reaches 0
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentCity]);

  if (!time) return null;

  return (
    <div className={style['timer']}>
      <div>
        <h2>{toDoubleDigits(time.days)}</h2>
        <p>days</p>
      </div>
      <div>
        <h2>{toDoubleDigits(time.hours)}</h2>
        <p>hours</p>
      </div>
      <div>
        <h2>{toDoubleDigits(time.minutes)}</h2>
        <p>minutes</p>
      </div>
      <div>
        <h2>{toDoubleDigits(time.seconds)}</h2>
        <p>seconds</p>
      </div>
    </div>
  );
};

export default Timer;
