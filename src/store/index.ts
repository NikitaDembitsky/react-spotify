import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import axios, { AxiosRequestConfig } from "axios";
import { fetchRefreshToken } from "./auth/authActions";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);

export const account = axios.create({
  baseURL: process.env.REACT_APP_ACCOUNT_SPOTIFY,
  headers: {
    authorization: `Basic ${process.env.REACT_APP_AUTH_KEY}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_SPOTIFY,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const access_token = localStorage.getItem("access_token");
    if (error.response.status === 401 && access_token) {
      const response = fetchRefreshToken();
      return response;
    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    const token: string | null = localStorage.getItem("access_token");
    if (token) {
      request.headers.Authorization = "Bearer " + token;
    } else {
      // eslint-disable-next-line no-throw-literal
      throw { response: { status: 401 } };
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
