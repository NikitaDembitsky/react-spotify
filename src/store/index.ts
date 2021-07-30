import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import { searchReducer } from "./reducers/searchReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  authReducer,
  searchReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
