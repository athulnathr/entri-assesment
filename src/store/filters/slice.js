import { createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";

const initialState = queryString.parse(window.location.search, {
  arrayFormat: "bracket",
});

const defaultState = () => {
  const defaultState = {
    size: 30,
    page: 1,
  };

  return defaultState;
};

const filters = createSlice({
  name: "filters",
  initialState: {
    ...defaultState(),
    ...initialState,
  },
  reducers: {
    updateFilter: (state, action) => {
      const { filter, value } = action.payload;
      state[filter] = value;
    },
    resetFilter: (state) => {
      state = defaultState();
      return state;
    },
  },
});

export const filterSelector = (state) => state.filters;

export const { updateFilter, resetFilter } = filters.actions;

export default filters.reducer;
