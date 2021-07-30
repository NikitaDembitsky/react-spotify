import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { searchTrack } from "../authenticServices";
import { fetchSearch, FETCH_SEARCH } from "../store/reducers/searchReducer";

function* fetchSearchWorker(action: {
    type: string,
    payload: {search: string}
}): any {
  const response = yield call(searchTrack, action.payload.search);
  const { data } = response;
  console.log(data.tracks.items);
}

export function* searchWatcher(): any {
  yield takeLatest(FETCH_SEARCH, fetchSearchWorker);
}
