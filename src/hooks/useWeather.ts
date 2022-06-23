import { useSelector } from "react-redux";

export const useWeather = (): WeatherState => {
  return useSelector(({ weather }: ReduxState) => weather);
};
