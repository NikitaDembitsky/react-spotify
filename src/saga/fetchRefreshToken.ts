import { call, takeEvery } from "redux-saga/effects";
import { refreshToken } from "../authenticServices";
import {FETCH_REFRESH_TOKEN} from "../store/reducers/authReducer"
function* fetchRefreshTokenWorker():any {
  const response = yield call(refreshToken);
  const { data } = response;
  console.log(data)
}

export function* refreshTokenWorker() {
  yield takeEvery(FETCH_REFRESH_TOKEN, fetchRefreshTokenWorker);
}
