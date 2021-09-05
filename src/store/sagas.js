import { all } from "redux-saga/effects";
import homeSaga from "../Pages/Home/saga";

export default function* rootSaga() {
  yield all([homeSaga()]);
}
