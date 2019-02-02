import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import routingReducer from "./routingReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  search: searchReducer,
  route: routingReducer,
  user: userReducer
});

export default reducers;
