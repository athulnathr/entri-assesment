import { call, put, takeEvery } from "redux-saga/effects";
import { rejectNews, requestNews, resolveNews } from "./slice";

function fetchNews() {
  return () => {
    console.log("fetchNews Called");
    // return { data: "null" };
  };
}

function* fetchNewsDataWorker() {
  try {
    console.log("the try");
    const response = yield call(fetchNews());
    yield put(resolveNews(response?.data));
  } catch (error) {
    yield put(rejectNews(error?.message));
  }
}

function* newsSaga() {
  yield takeEvery(requestNews().type, fetchNewsDataWorker);
}

export default newsSaga;
