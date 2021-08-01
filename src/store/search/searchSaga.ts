import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {searchApi} from "../../api/searchApi";
import {FETCH_SEARCH} from "./searchReducer";

function* fetchSearch(action: {
    type: string,
    payload: {search: string}
}): any {
  const response = yield call(searchApi.searchTrack, action.payload.search);
  const { data } = response;
  console.log(data.tracks.items);
}

function* searchSaga(): any {
  yield takeLatest(FETCH_SEARCH, fetchSearch);
}

export default searchSaga;
