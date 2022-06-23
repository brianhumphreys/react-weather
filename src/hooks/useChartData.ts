import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../store/weather";
import { Metric, Range } from "../utils/enums";
import {
  getDailyFeelsLike,
  getDailyHigh,
  getDailyHumidity,
  getDailyLow,
  getDailyPressure,
  getDailyTemperature,
  getDailyWindSpeed,
  getHourlyFeelsLike,
  getHourlyHigh,
  getHourlyHumidity,
  getHourlyLow,
  getHourlyPressure,
  getHourlyTemperature,
  getHourlyVisibility,
  getHourlyWindSpeed,
  getMinutelyPrecipitation,
} from "../utils/mapReducSeries";

export const useChartData = (): [XY[], string] => {
  const dispatch = useDispatch();

  const [series, configOrError, weather] = useSelector(
    ({ weather }: ReduxState): [XY[], string, WeatherState] => {
      console.log(weather.currentChart);
      if (!weather.oneCallAPI) {
        return [[], "", weather];
      }

      const chartConfig =
        weather.currentChart.range + "-" + weather.currentChart.metric;

      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.TEMPERATURE
      ) {
        return [getDailyTemperature(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.TEMPERATURE
      ) {
        return [getHourlyTemperature(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.HIGH
      ) {
        return [getDailyHigh(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.LOW
      ) {
        return [getDailyLow(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.PRESSURE
      ) {
        return [getDailyPressure(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.HUMIDITY
      ) {
        return [getDailyHumidity(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.PRESSURE
      ) {
        return [getHourlyPressure(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.HUMIDITY
      ) {
        return [getHourlyHumidity(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.MINUTE &&
        weather.currentChart.metric == Metric.PRECIPITATION
      ) {
        return [getMinutelyPrecipitation(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.HIGH
      ) {
        return [getHourlyHigh(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.LOW
      ) {
        return [getHourlyLow(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.VISIBILITY
      ) {
        return [getHourlyVisibility(weather), chartConfig, weather];
      }

      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.WIND_SPEED
      ) {
        return [getHourlyWindSpeed(weather), chartConfig, weather];
      }
      if (
        weather.currentChart.range === Range.HOUR &&
        weather.currentChart.metric == Metric.FEELS_LIKE
      ) {
        return [getHourlyFeelsLike(weather), chartConfig, weather];
      }
      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.WIND_SPEED
      ) {
        return [getDailyWindSpeed(weather), chartConfig, weather];
      }
      if (
        weather.currentChart.range === Range.DAY &&
        weather.currentChart.metric == Metric.FEELS_LIKE
      ) {
        return [getDailyFeelsLike(weather), chartConfig, weather];
      }

      return [[], "error", weather];
    },
  );

  useEffect(() => {
    if (configOrError === "error") {
      dispatch(
        setError(
          weather.currentChart.metric +
            " data is not available in the " +
            weather.currentChart.range +
            " range.",
        ),
      );
    }
  }, [configOrError]);

  return [series, configOrError];
};
