import React from 'react';

const url = 'https://openweathermap.org/img/wn/';

const Image = ({ src, alt }) => {
  return <img src={`${url}/${src}@2x.png`} alt={alt} />;
};

const WeatherIcons = ({ icon }) => {
  switch (icon) {
    case 'clear-day':
      return <Image src='01d' alt='clear-day' />;

    case 'clear-night':
      return <Image src='01n' alt='clear-night' />;

    case 'cloudy':
      return <Image src='03d' alt='cloudy' />;

    case 'fog':
      return <Image src='50d' alt='fog' />;

    case 'hail':
      return <Image src='10n' alt='hail' />;

    case 'partly-cloudy-day':
      return <Image src='02d' alt='partly-cloudy-day' />;

    case 'partly-cloudy-night':
      return <Image src='02n' alt='partly-cloudy-night' />;

    case 'rain-snow-showers-day':
      return <Image src='09d' alt='rain-snow-showers-day' />;

    case 'rain-snow-showers-night':
      return <Image src='09n' alt='rain-snow-showers-night' />;

    case 'rain-snow':
      return <Image src='09n' alt='rain-snow' />;

    case 'rain':
      return <Image src='10d' alt='rain' />;

    case 'showers-day':
      return <Image src='10d' alt='showers-day' />;

    case 'showers-night':
      return <Image src='10n' alt='showers-night' />;

    case 'sleet':
      return <Image src='13d' alt='sleet' />;

    case 'snow-showers-day':
      return <Image src='13d' alt='snow-showers-day' />;

    case 'snow-showers-night':
      return <Image src='13n' alt='snow-showers-night' />;

    case 'snow':
      return <Image src='13d' alt='snow' />;

    case 'thunder-rain':
      return <Image src='11d' alt='thunder-rain' />;

    case 'thunder-showers-day':
      return <Image src='11d' alt='thunder-showers-day' />;

    case 'thunder-showers-night':
      return <Image src='11n' alt='thunder-showers-night' />;

    case 'thunder':
      return <Image src='11d' alt='thunder' />;

    case 'wind':
      return <Image src='02d' alt='wind' />;

    default:
      return <Image src='02d' alt='wind' />;

    // throw new Error(`something went wrong, unknown weather icon`);
  }
};

export default WeatherIcons;
