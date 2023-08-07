import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
const baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

const getWeather = async (startDate, endDate, city) => {
  const result = await axios.get(
    `${baseURL}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${KEY}&contentType=json`
  );

  return result;
};

const weather = { getWeather };

export default weather;
