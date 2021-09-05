import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: null,
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    requestNews: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    resolveNews: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    rejectNews: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const newsSelector = (state) => state.home.news;

export const { requestNews, resolveNews, rejectNews } = newsSlice.actions;

export default newsSlice.reducer;
