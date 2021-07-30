import { all } from "redux-saga/effects";
import { searchWatcher } from "./fetchSearchSaga";
import { tokenWatcher } from "./fetchTokenSaga";

export function* rootWatcher() {
  yield all([tokenWatcher(), searchWatcher()]);
}
