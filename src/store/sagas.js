import { all } from "redux-saga/effects";
import newsSaga from "../Pages/Home/saga";

export default function* rootSaga() {
  yield all([newsSaga()]);
}
