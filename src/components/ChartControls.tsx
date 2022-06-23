import React from "react";
import { useDispatch } from "react-redux";
import { useWeather } from "../hooks/useWeather";
import { setMetric, setRange } from "../store/weather";
import { Metric, Range } from "../utils/enums";
import { isDay, isHour, isMinute } from "../utils/mapReducSeries";
import { Optional } from "./Optional";

export const ChartControls = () => {
  const dispatch = useDispatch();
  const { currentChart } = useWeather();
  return (
    <div className="row">
      <div className="col">
        <h5 className="card-title">Time Ranges</h5>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {!!currentChart ? currentChart.range : "Ranges"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                onClick={() => dispatch(setRange(Range.MINUTE))}
                className="dropdown-item"
                href="#"
              >
                Minute
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setRange(Range.HOUR))}
                className="dropdown-item"
                href="#"
              >
                Hour
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setRange(Range.DAY))}
                className="dropdown-item"
                href="#"
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <h5 className="card-title">Metrics</h5>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {!!currentChart ? currentChart.metric : "Metrics"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.TEMPERATURE))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Temperatures
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.HIGH))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Highs
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.LOW))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Lows
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.HUMIDITY))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Humidities
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.PRESSURE))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Pressures
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.VISIBILITY))}
                className={`dropdown-item ${
                  isHour(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Visibility
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.PRECIPITATION))}
                className={`dropdown-item ${
                  isMinute(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Precipitation
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.WIND_SPEED))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Wind Speed
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(setMetric(Metric.FEELS_LIKE))}
                className={`dropdown-item ${
                  isHour(currentChart) || isDay(currentChart) ? "" : "disabled"
                }`}
                href="#"
              >
                Feels Like
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
