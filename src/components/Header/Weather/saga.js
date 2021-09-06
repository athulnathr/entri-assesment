import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { WEATER_ENDPOINT, WEATHER_API_KEY } from "../../../constants/api";
import { rejectWeather, requestWeather, resolveWeather } from "./slice";

function fetchWeather(params) {
  return () => {
    return axios.get(WEATER_ENDPOINT, {
      params: {
        lat: params.lat,
        lon: params.long,
        units: "metric",
        appid: WEATHER_API_KEY,
      },
    });
  };
}

function* fetchWeatherDataWorker(action) {
  try {
    const response = yield call(fetchWeather(action.payload));
    yield put(resolveWeather(response.data));
  } catch (error) {
    yield put(rejectWeather(error.message));
  }
}

function* weatherSaga() {
  yield takeEvery(requestWeather().type, fetchWeatherDataWorker);
}

export default weatherSaga;
