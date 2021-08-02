import { call, StrictEffect, takeEvery } from "redux-saga/effects";
import { FETCH_REFRESH_TOKEN, FETCH_TOKEN } from "./authActions";
import { authApi } from "../../api/authApi";
import { AxiosResponse } from "axios";

function* fetchToken() {
  const response: AxiosResponse = yield call(authApi.getToken);
  const { data } = response;
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}

function* fetchRefreshToken() {
  const response: AxiosResponse = yield call(authApi.getRefreshToken);
  const { data } = response;
  console.log(data);
}

function* authSaga(): Generator<StrictEffect> {
  yield takeEvery(FETCH_TOKEN, fetchToken);
  yield takeEvery(FETCH_REFRESH_TOKEN, fetchRefreshToken);
}

export default authSaga;
