import { createSlice } from "@reduxjs/toolkit";
import { Metric, Range } from "../utils/enums";

// Slice
const slice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
    currentChart: {
      range: Range.HOUR,
      metric: Metric.TEMPERATURE,
    },
    error: null,
  },
  reducers: {
    setWeather: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    setRange: (state, action) => ({
      ...state,
      currentChart: {
        ...state.currentChart,
        // metric: Metric.TEMPERATURE,
        range: action.payload,
      },
    }),
    setMetric: (state, action) => ({
      ...state,
      currentChart: {
        ...state.currentChart,
        metric: action.payload,
      },
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});
export default slice.reducer;
// Actions
export const { setWeather, setMetric, setRange, setError } = slice.actions;
