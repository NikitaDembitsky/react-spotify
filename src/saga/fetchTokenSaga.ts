import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_TOKEN, setToken } from "../store/reducers/authReducer";
import { fetchToken } from "../authenticServices";

function* fetchTokenWorker(): any {
  const response = yield call(fetchToken);
  const { data } = response;
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}

export function* tokenWatcher() {
  yield takeEvery(FETCH_TOKEN, fetchTokenWorker);
}
