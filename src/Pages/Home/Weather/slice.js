import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    requestWeather: (state) => {
      state = {
        loading: true,
        data: null,
        error: null,
      };
    },
    resolveWeather: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    rejectWeather: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const weatherSelector = (state) => state.home.weather;
export const { requestWeather, resolveWeather, rejectWeather } =
  weatherSlice.actions;

export default weatherSlice.reducer;
