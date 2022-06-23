import { KeyboardEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import logo from "./logo.svg";

import { initialFetch } from "./actions";
import { useChart } from "./hooks/useChart";
import { Card } from "./components/card";
import { Chart } from "./components/Chart";
import { useWeather } from "./hooks/useWeather";
import { setError } from "./store/weather";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("houston");

  const { oneCallAPI, currentWeatherAPI, hourlyForecastAPI } = useSelector(
    ({ weather }: ReduxState) => weather,
  );

  useEffect(() => {
    dispatch(initialFetch(query));
  }, []);

  const search: KeyboardEventHandler = (evt) => {
    if (evt.key === "Enter") {
      dispatch(initialFetch(query));
    }
  };

  const dateBuilder = (d: Date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const { error } = useWeather();

  useEffect(() => {
    if (!!error) {
      Toastify({
        text: error,
        duration: 5000,
      }).showToast();
      dispatch(setError(null));
    }
  }, [error]);

  return (
    <div
      className={
        typeof oneCallAPI !== "undefined"
          ? oneCallAPI.current.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <Card />
        <br />
        <br />
        <Chart />
        {/* <button type="button" className="btn btn-primary" id="liveToastBtn">
          Show live toast
        </button> */}
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-autohide="false"
        >
          <div className="toast-header">
            {/* <img src="..." className="rounded mr-2" alt="..." /> */}
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
        {/* <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="liveToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img src="..." className="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
