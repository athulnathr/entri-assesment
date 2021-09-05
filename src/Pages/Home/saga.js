import { all } from "redux-saga/effects";
import newsSaga from "./NewsFeed/saga";
import weatherSaga from "./Weather/saga";

export default function* rootSaga() {
  yield all([newsSaga(), weatherSaga()]);
}
