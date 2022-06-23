import { generateTimeSeries } from "./utils";
import { Metric, Range } from "../utils/enums";

// not allowed
//  hourly high
// hourly low
// minutely anything expect percipitation

export const getHourlyTemperature = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.hourly.map((hourData) => hourData.temp),
    3600000,
  );
};

export const getDailyTemperature = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.temp.day),
    86400000,
  );
};

export const getDailyHigh = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.temp.max),
    86400000,
  );
};

export const getDailyLow = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.temp.min),
    86400000,
  );
};

export const getDailyPressure = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.pressure),
    86400000,
  );
};

export const getDailyHumidity = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.humidity),
    86400000,
  );
};

export const getHourlyPressure = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.hourly.map((hourData) => hourData.pressure),
    3600000,
  );
};

export const getHourlyHumidity = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.hourly.map((hourData) => hourData.humidity),
    3600000,
  );
};

export const getMinutelyPrecipitation = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.minutely.map((minuteData) => minuteData.percipitation),
    60000,
  );
};

export const getHourlyHigh = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.hourlyForecastAPI.list.map((hourData) => hourData.main.temp_max),
    3600000,
  );
};

export const getHourlyLow = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.hourlyForecastAPI.list.map((hourData) => hourData.main.temp_min),
    3600000,
  );
};

export const getHourlyVisibility = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.hourlyForecastAPI.list.map((hourData) => hourData.visibility),
    3600000,
  );
};

export const getHourlyFeelsLike = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.hourlyForecastAPI.list.map((hourData) => hourData.main.feels_like),
    3600000,
  );
};

export const getHourlyWindSpeed = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.hourlyForecastAPI.list.map((hourData) => hourData.wind.speed),
    3600000,
  );
};

export const getDailyFeelsLike = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.feels_like.day),
    86400000,
  );
};

export const getDailyWindSpeed = (weather: WeatherState) => {
  return generateTimeSeries(
    weather.oneCallAPI.daily.map((dayData) => dayData.wind_speed),
    86400000,
  );
};

// =================================================================
export const isMinute = (currentChart: CurrentChart) =>
  !!currentChart && Range.MINUTE === currentChart.range;
export const isHour = (currentChart: CurrentChart) =>
  !!currentChart && Range.HOUR === currentChart.range;
export const isDay = (currentChart: CurrentChart) =>
  !!currentChart && Range.DAY === currentChart.range;
