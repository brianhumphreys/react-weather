import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  mergeMap,
  pluck,
  tap,
  iif,
  of,
  forkJoin,
  throwError,
  Observable,
} from "rxjs";
import { ajax } from "rxjs/ajax";

function App() {
  useEffect(() => {
    ajax
      .getJSON<GeoResponse>(
        "http://api.openweathermap.org/geo/1.0/direct?q=Houston,Texas&limit=5&appid=d8c40bb024e63504465377eae9f41697",
      )
      .pipe(
        pluck<GeoResponse, CityLatLon[]>("body"),
        mergeMap(
          (body: CityLatLon[]): Observable<CityLatLon> =>
            iif(
              () => body.length > 0,
              of(body[0]),
              throwError(() => new Error("oops")),
            ),
        ),
        mergeMap((latlon: CityLatLon) =>
          forkJoin({
            currentWeatherAPI: ajax.getJSON(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid={API key}`,
            ),
          }),
        ),
      )
      .subscribe();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
