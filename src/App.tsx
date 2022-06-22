import React, { useEffect } from "react";
import { forkJoin, iif, tap, mergeMap, Observable, of, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  getCurrentWeatherURL,
  getGeoEncoderURL,
  getThreeHourlyForcastURL,
  getOneCallURL,
} from "./api/urls";
import "./App.css";
import logo from "./logo.svg";

function App() {
  useEffect(() => {
    console.log("hellllllo");
    ajax
      .getJSON<CityLatLon[]>(getGeoEncoderURL("houston"))
      .pipe(
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
            currentWeatherAPI: ajax.getJSON(getCurrentWeatherURL(latlon)),
            oneCallAPI: ajax.getJSON(getOneCallURL(latlon)),
            hourlyForecastAPI: ajax.getJSON(getThreeHourlyForcastURL(latlon)),
          }),
        ),
        tap(console.log),
      )
      .subscribe();
  }, []);
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
