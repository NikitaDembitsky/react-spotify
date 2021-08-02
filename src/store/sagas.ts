import { all } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import searchSaga from "./search/searchSaga";

function* rootSaga() {
  yield all([authSaga(), searchSaga()]);
}

export default rootSaga;
