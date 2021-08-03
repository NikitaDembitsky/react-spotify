import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import {
  FETCH_CURRENT_USER,
  FETCH_REFRESH_TOKEN,
  FETCH_TOKEN,
  setCurrentUser,
} from "./authActions";
import { authApi } from "../../api/authApi";
import { AxiosResponse } from "axios";

function* fetchToken() {
  const response: AxiosResponse = yield call(authApi.getToken);
  const { data } = response;
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);

  console.log("token")

  yield put({
    type: "PUSH_HISTORY",
    payload: "/"
  })

  yield put({
    type: FETCH_CURRENT_USER
  })
}

function* fetchCurrentUser() {
  console.log("fetch user")


  const response: AxiosResponse = yield call(authApi.getCurrentUser);
  const { data } = response;
  console.log(data)
  yield put(setCurrentUser(data.display_name));
}

function* fetchRefreshToken() {
  const response: AxiosResponse = yield call(authApi.getRefreshToken);
  const { data } = response;
}

function* authSaga(): Generator<StrictEffect> {
  yield takeEvery(FETCH_TOKEN, fetchToken);
  yield takeEvery(FETCH_REFRESH_TOKEN, fetchRefreshToken);
  yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser);
}

export default authSaga;
