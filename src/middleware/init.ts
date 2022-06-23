import { PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { forkJoin, iif, map, mergeMap, Observable, of, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { INITIALIZE, initializeAction } from "../actions";
import {
  getCurrentWeatherURL,
  getGeoEncoderURL,
  getOneCallURL,
  getThreeHourlyForcastURL,
} from "../api/urls";

export const fetchWeatherData = (
  action$: Observable<PayloadAction<string>>,
): Observable<PayloadAction<WeatherState>> =>
  action$.pipe(
    ofType(INITIALIZE),
    mergeMap(({ payload }: PayloadAction<string>) =>
      ajax.getJSON<CityLatLon[]>(getGeoEncoderURL(payload)).pipe(
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
          }),
        ),
        map((weatherState: WeatherState) => initializeAction(weatherState)),
      ),
    ),
  );
