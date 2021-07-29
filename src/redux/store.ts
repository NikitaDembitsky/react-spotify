import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {authReducer} from "./reducers/authReducer"
import logger from "redux-logger";

const rootReducer = combineReducers({
    authReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
