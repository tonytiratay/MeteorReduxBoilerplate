import axios from 'axios';

const WeatherApiKey = 'f8cdeb9c6daedb0c0d695dab7179e716';
const RootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${WeatherApiKey}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){

  const url = `${RootUrl}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ' + request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
