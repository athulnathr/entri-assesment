import { combineReducers } from "redux";
import newsReducer from "../Pages/Home/slice";

const allReducers = combineReducers({
  news: newsReducer,
});

export default allReducers;
