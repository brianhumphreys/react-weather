import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weather from "./weather";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchWeatherData } from "../middleware/init";

const epicMiddleware = createEpicMiddleware();

// @ts-ignore
export const rootEpic = combineEpics(fetchWeatherData);

const reducer = combineReducers({
  weather,
});
const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});

// @ts-ignore
epicMiddleware.run(rootEpic);
export default store;
