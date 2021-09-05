import { combineReducers } from "redux";
import newsReducer from "../Pages/Home/reducer";

const allReducers = combineReducers({
  news: newsReducer,
});

export default allReducers;
