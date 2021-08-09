import { AxiosResponse } from "axios";
import {
  call,
  StrictEffect,
  takeLatest,
  put,
  select,
} from "redux-saga/effects";
import { searchApi } from "../../api/searchApi";
import { FETCH_SEARCH, setTracks } from "./searchActions";

function* fetchSearch(action: any): any {
  const offset = yield select((state) => state.searchReducer.offset);
  const response: AxiosResponse = yield call(
    searchApi.searchTrack,
    action.payload,
    offset
  );
  const { data } = response;
  console.log(data)
  yield put(setTracks(data.tracks.items));
}

function* searchSaga(): Generator<StrictEffect> {
  yield takeLatest(FETCH_SEARCH, fetchSearch);
}

export default searchSaga;
