import { call, put, select, takeEvery } from "redux-saga/effects";
import { rejectNews, requestNews, resolveNews } from "./slice";
import { NEWS_API_KEY, NEWS_ENPOINT } from "../../../constants/api";

import axios from "axios";
import { filterSelector } from "../../../store/filters/slice";

function fetchNews(params) {
  return () => {
    return axios.get(NEWS_ENPOINT, {
      params: {
        page: params?.page || 1,
        sortBy: "publishedAt",
        pageSize: 30,
        apiKey: NEWS_API_KEY,
        q: params?.search,
        langugage: params?.lang || "en",
      },
    });
  };
}

function* fetchNewsDataWorker() {
  try {
    const filters = yield select(filterSelector);
    const response = yield call(fetchNews(filters));
    yield put(resolveNews(response?.data));
  } catch (error) {
    yield put(rejectNews(error?.message));
  }
}

function* newsSaga() {
  yield takeEvery(requestNews().type, fetchNewsDataWorker);
}

export default newsSaga;
