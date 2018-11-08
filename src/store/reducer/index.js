import { combineReducers } from "redux";

import FeedReducer from "./FeedReducer";

export default combineReducers({
  feed: FeedReducer
});
