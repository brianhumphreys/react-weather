import { PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import {
  map,
  of,
  mergeMap,
  Observable,
  iif,
  throwError,
  forkJoin,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { INITIALIZE, initializeAction } from "../actions";
import { Epic } from "redux-observable";
import {
  getCurrentWeatherURL,
  getGeoEncoderURL,
  getOneCallURL,
  getThreeHourlyForcastURL,
} from "../api/urls";

export const fetchWeatherData = (
  action$: Observable<PayloadAction<null>>,
): Observable<PayloadAction<WeatherState>> =>
  action$.pipe(
    ofType(INITIALIZE),
    mergeMap(() =>
      ajax.getJSON<CityLatLon[]>(getGeoEncoderURL("houston")).pipe(
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
            currentWeatherAPI: ajax.getJSON<CurrentWeatherAPI>(
              getCurrentWeatherURL(latlon),
            ),
            oneCallAPI: ajax.getJSON<OneCallAPI>(getOneCallURL(latlon)),
            hourlyForecastAPI: ajax.getJSON<HourlyForecastAPI>(
              getThreeHourlyForcastURL(latlon),
            ),
          }).pipe(tap(console.log)),
        ),
        map((weatherState: WeatherState) => initializeAction(weatherState)),
        // tap((result) => dispatch(init(result))),
      ),
    ),
    // @ts-ignore
  );
