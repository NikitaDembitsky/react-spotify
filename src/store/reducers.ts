import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { searchReducer } from "./search/searchReducer";

const rootReducer = combineReducers({
  authReducer,
  searchReducer,
});

export default rootReducer;
