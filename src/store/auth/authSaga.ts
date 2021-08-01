import {call, takeEvery} from "redux-saga/effects";
import {FETCH_REFRESH_TOKEN, FETCH_TOKEN} from "./authReducer";
import  {authApi} from "../../api/authApi";

function* fetchToken(): any {
    const response = yield call(authApi.getToken);
    const { data } = response;
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
}

function* fetchRefreshToken():any {
    const response = yield call(authApi.getRefreshToken);
    const { data } = response;
    console.log(data)
}

function* authSaga() {
    yield takeEvery(FETCH_TOKEN, fetchToken);
    yield takeEvery(FETCH_REFRESH_TOKEN, fetchRefreshToken);
}

export default authSaga;