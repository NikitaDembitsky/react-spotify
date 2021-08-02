import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {baseURL} from "../utils";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);

// axios.interceptors.request.use((request: AxiosRequestConfig) => {
//     if (request.url !== AuthenticationEndpoints.GET_TOKEN_URL
//         && request?.url?.startsWith('/api')) {
//         const token: string = localStorage.get('access_token');
//         if (token) {
//             request.headers.Authorization = 'Bearer ' + token;
//         } else {
//             throw { response: { status: 401 } };
//         }
//     }
//     return request;
// }, (error) => {
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(
//     (response: AxiosResponse) => {
//         return response.data;
//     },
//     function (error) {
//         return Promise.reject(error.response);
//     }
// );

// axios.defaults.baseURL = baseURL;