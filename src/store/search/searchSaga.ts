import { AxiosResponse } from "axios";
import { call, StrictEffect, takeLatest } from "redux-saga/effects";
import { searchApi } from "../../api/searchApi";
import { fetchSearchAction, FETCH_SEARCH } from "./searchReducer";

function* fetchSearch(action: fetchSearchAction) {
  const response: AxiosResponse = yield call(
    searchApi.searchTrack,
    action.payload
  );
  const { data } = response;
  console.log(data.tracks.items);
}

function* searchSaga(): Generator<StrictEffect> {
  yield takeLatest(FETCH_SEARCH, fetchSearch);
}

export default searchSaga;
