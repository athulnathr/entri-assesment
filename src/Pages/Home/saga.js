import { all } from "redux-saga/effects";
import newsSaga from "./NewsFeed/saga";

export default function* rootSaga() {
  yield all([newsSaga()]);
}
