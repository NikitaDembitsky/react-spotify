import { all, fork, StrictEffect } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import searchSaga from "./search/searchSaga";

export const rootSaga = function* root(): Generator<StrictEffect> {
  yield all([fork(authSaga), fork(searchSaga)]);
};

export default rootSaga;
