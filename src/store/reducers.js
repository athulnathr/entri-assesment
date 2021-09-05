import { combineReducers } from "redux";
import homeReducer from "../Pages/Home/reducer";

const allReducers = combineReducers({
  home: homeReducer,
});

export default allReducers;
