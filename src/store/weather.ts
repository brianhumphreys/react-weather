import { createSlice } from "@reduxjs/toolkit";
// Slice
const slice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
  },
  reducers: {
    setWeather: (state, action) => action.payload,
  },
});
export default slice.reducer;
// Actions
export const { setWeather } = slice.actions;
