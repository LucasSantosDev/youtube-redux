// Combinando os reducers
import { combineReducers } from "redux";

import searchVideo from "./search-video";
import playVideo from "./play-video";

const rootReducer = combineReducers({
  searchVideo,
  playVideo,
});

export default rootReducer;
