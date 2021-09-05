import { call, put, takeEvery } from "redux-saga/effects";
import { rejectNews, requestNews, resolveNews } from "./slice";
import { NEWS_API_KEY, NEWS_ENPOINT } from "../../../constants/api";

import axios from "axios";

function fetchNews(page) {
  return () => {
    return axios.get(NEWS_ENPOINT, {
      params: {
        page: page || 1,
        sortBy: "publishedAt",
        pageSize: 30,
        apiKey: NEWS_API_KEY,
        q: "tech",
      },
    });
  };
}

function* fetchNewsDataWorker(action) {
  try {
    const response = yield call(fetchNews(action?.payload));
    yield put(resolveNews(response?.data));
  } catch (error) {
    yield put(rejectNews(error?.message));
  }
}

function* newsSaga() {
  yield takeEvery(requestNews().type, fetchNewsDataWorker);
}

export default newsSaga;
