import {
  call,
  put,
  StrictEffect,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  FETCH_CURRENT_USER,
  FETCH_REFRESH_TOKEN,
  FETCH_TOKEN,
  pushHistory,
  PUSH_HISTORY,
  setCurrentUser,
  setToken,
  SET_TOKEN,
} from "./authActions";
import { authApi } from "../../api/authApi";
import { AxiosResponse } from "axios";

function* fetchToken() {
  const response: AxiosResponse = yield call(authApi.getToken);
  const { data } = response;

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);

  yield put({
    type: SET_TOKEN,
    payload: data.access_token,
  });
}

function* fetchCurrentUser() {
  const response: AxiosResponse = yield call(authApi.getCurrentUser);
  const { data } = response;
  yield put(setCurrentUser(data));
}

function* fetchRefreshToken() {
  const response: AxiosResponse = yield call(authApi.getRefreshToken);
  const { data } = response;
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}

function* authSaga(): Generator<StrictEffect> {
  yield takeLatest(FETCH_TOKEN, fetchToken);
  yield takeEvery(FETCH_REFRESH_TOKEN, fetchRefreshToken);
  yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser);
}

export default authSaga;
