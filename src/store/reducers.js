import { combineReducers } from "redux";
import homeReducer from "../Pages/Home/reducer";
import filterReducer from "./filters/slice";

const allReducers = combineReducers({
  home: homeReducer,
  filters: filterReducer,
});

export default allReducers;
