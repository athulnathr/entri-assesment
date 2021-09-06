import { combineReducers } from "redux";
import weatherReducer from "../components/Header/Weather/slice";
import homeReducer from "../Pages/Home/reducer";
import filterReducer from "./filters/slice";

const allReducers = combineReducers({
  home: homeReducer,
  weather: weatherReducer,
  filters: filterReducer,
});

export default allReducers;
