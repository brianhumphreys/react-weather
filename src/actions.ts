import { PayloadAction } from "@reduxjs/toolkit";

export const INITIALIZE = "weather/init";
export const SET_WEATHER = "weather/setWeather";

export const initializeAction = (
  payload: WeatherState,
): PayloadAction<WeatherState> => ({
  type: SET_WEATHER,
  payload,
});

export const initialFetch = (): PayloadAction<null> => ({
  type: INITIALIZE,
  payload: null,
});
