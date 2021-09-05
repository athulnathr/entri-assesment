import { all } from "redux-saga/effects";
import homeSaga from "../Pages/Home/saga";
import filterSaga from "./filters/saga";

export default function* rootSaga() {
  yield all([homeSaga(), filterSaga()]);
}
