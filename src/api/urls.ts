const API_KEY = "8f5d0f446c142d758dad440530f07ee9";
const CORS_PROXY = "https://cors-proxy-123456.herokuapp.com/";
const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
const ONE_CALL_API_URL = "https://api.openweathermap.org/data/2.5/onecall";
const THREE_HOURLY_FORECAST_API_URL =
  "api.openweathermap.org/data/2.5/forecast";
const CURREN_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5/weather";

export const getGeoEncoderURL = (city: string): string => {
  return CORS_PROXY + GEO_API_URL + `?q=${city}&limit=5&appid=${API_KEY}`;
};

export const getCurrentWeatherURL = (latlon: CityLatLon): string => {
  console.log("getCurrentWeatherURL");
  return (
    CORS_PROXY +
    CURREN_WEATHER_API_URL +
    `?lat=${latlon.lat}&lon=${latlon.lon}&appid=${API_KEY}`
  );
};

export const getOneCallURL = (latlon: CityLatLon): string => {
  console.log("getOneCallURL");
  return (
    CORS_PROXY +
    ONE_CALL_API_URL +
    `?lat=${latlon.lat}&lon=${latlon.lon}&appid=${API_KEY}`
  );
};

export const getThreeHourlyForcastURL = (latlon: CityLatLon): string => {
  console.log("getThreeHourlyForcastURL");
  return (
    CORS_PROXY +
    THREE_HOURLY_FORECAST_API_URL +
    `?lat=${latlon.lat}&lon=${latlon.lon}&appid=${API_KEY}`
  );
};

// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
