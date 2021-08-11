import { AxiosResponse } from "axios";
import {
  call,
  StrictEffect,
  takeLatest,
  put,
  select,
} from "redux-saga/effects";
import { searchApi } from "../../api/searchApi";
import { SearchActions, setTracks } from "./searchActions";

function* getSearchResult(action: { payload: string; type: string }): unknown {
  const offset = yield select((state) => state.searchReducer.offset);
  yield put({
    type: SearchActions.SET_SEARCH,
    payload: action.payload,
  });
  const response: AxiosResponse = yield call(
    searchApi.searchTrack,
    action.payload,
    offset
  );
  const { data } = response;
  yield put(setTracks(data.tracks.items));
}

function* searchSaga(): Generator<StrictEffect> {
  yield takeLatest(SearchActions.FETCH_SEARCH, getSearchResult);
}

export default searchSaga;
