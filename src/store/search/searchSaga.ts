import { AxiosResponse } from "axios";
import {
  call,
  StrictEffect,
  takeLatest,
  put,
  select,
} from "redux-saga/effects";
import { searchApi } from "../../api/searchApi";
import { FETCH_SEARCH, setTracks, SET_SEARCH } from "./searchActions";


function* fetchSearch(action: { payload: string; type: string }):any {
  const offset = yield select((state) => state.searchReducer.offset);
  yield put({
    type: SET_SEARCH,
    payload: action.payload,
  });
  const response: AxiosResponse = yield call(
    searchApi.searchTrack,
    action.payload,
    offset
  );
  const { data } = response;
  console.log(data);

  yield put(setTracks(data.tracks.items));
}

function* searchSaga(): Generator<StrictEffect> {
  yield takeLatest(FETCH_SEARCH, fetchSearch);
}

export default searchSaga;
