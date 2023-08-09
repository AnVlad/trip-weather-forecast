import React from 'react';

const url = 'https://openweathermap.org/img/wn';

const Image = ({ src, alt, size }) => {
  return <img src={`${url}/${src}${size ? `@${size}x` : ''}.png`} alt={alt} />;
};

const WeatherIcons = ({ icon, size }) => {
  switch (icon) {
    case 'clear-day':
      return <Image src='01d' alt='clear-day' size={size} />;

    case 'clear-night':
      return <Image src='01n' alt='clear-night' size={size} />;

    case 'cloudy':
      return <Image src='03d' alt='cloudy' size={size} />;

    case 'fog':
      return <Image src='50d' alt='fog' size={size} />;

    case 'hail':
      return <Image src='10n' alt='hail' size={size} />;

    case 'partly-cloudy-day':
      return <Image src='02d' alt='partly-cloudy-day' size={size} />;

    case 'partly-cloudy-night':
      return <Image src='02n' alt='partly-cloudy-night' size={size} />;

    case 'rain-snow-showers-day':
      return <Image src='09d' alt='rain-snow-showers-day' size={size} />;

    case 'rain-snow-showers-night':
      return <Image src='09n' alt='rain-snow-showers-night' size={size} />;

    case 'rain-snow':
      return <Image src='09n' alt='rain-snow' size={size} />;

    case 'rain':
      return <Image src='10d' alt='rain' size={size} />;

    case 'showers-day':
      return <Image src='10d' alt='showers-day' size={size} />;

    case 'showers-night':
      return <Image src='10n' alt='showers-night' size={size} />;

    case 'sleet':
      return <Image src='13d' alt='sleet' size={size} />;

    case 'snow-showers-day':
      return <Image src='13d' alt='snow-showers-day' size={size} />;

    case 'snow-showers-night':
      return <Image src='13n' alt='snow-showers-night' size={size} />;

    case 'snow':
      return <Image src='13d' alt='snow' size={size} />;

    case 'thunder-rain':
      return <Image src='11d' alt='thunder-rain' size={size} />;

    case 'thunder-showers-day':
      return <Image src='11d' alt='thunder-showers-day' size={size} />;

    case 'thunder-showers-night':
      return <Image src='11n' alt='thunder-showers-night' size={size} />;

    case 'thunder':
      return <Image src='11d' alt='thunder' size={size} />;

    case 'wind':
      return <Image src='02d' alt='wind' size={size} />;

    default:
      return <Image src='02d' alt='wind' size={size} />;

    // throw new Error(`something went wrong, unknown weather icon`);
  }
};

export default WeatherIcons;
