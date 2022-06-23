import { KeyboardEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import logo from "./logo.svg";

import { initialFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("houston");

  const { oneCallAPI, currentWeatherAPI } = useSelector(
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
        {typeof oneCallAPI !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                <p>{currentWeatherAPI.sys.country}</p>
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(oneCallAPI.current.temp)}°c
              </div>
              <div className="weather">{oneCallAPI.current.temp}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
