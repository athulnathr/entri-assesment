import { combineReducers } from "redux";
import news from "./NewsFeed/slice";
import weather from "./Weather/slice";
export default combineReducers({
  news,
  weather,
});
