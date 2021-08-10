export const SET_IS_AUTHENTIFICATED = "SET_IS_AUTHENTIFICATED";
export const SET_TOKEN = "SET_TOKEN";
export const FETCH_TOKEN = "FETCH_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const FETCH_REFRESH_TOKEN = "FETCH_REFRESH_TOKEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

export interface setIsAuthentificatedAction {
  type: "SET_IS_AUTHENTIFICATED";
  payload: boolean;
}

export interface setTokenAction {
  type: "SET_TOKEN";
  payload: string;
}
export interface fetchTokenAction {
  type: "FETCH_TOKEN";
}

export interface setRefreshTokenAction {
  type: "SET_REFRESH_TOKEN";
  payload: string;
}

export interface fetchRefreshTokenAction {
  type: "FETCH_REFRESH_TOKEN";
}

export interface setCurrentUserAction {
  type: "SET_CURRENT_USER";
  payload: string;
}

export interface fetchCurrentUserAction {
  type: "FETCH_CURRENT_USER";
}

export const setIsAuthentificated = (
  data: boolean
): setIsAuthentificatedAction => ({
  type: SET_IS_AUTHENTIFICATED,
  payload: data,
});

export const setToken = (payload: string): setTokenAction => ({
  type: SET_TOKEN,
  payload,
});
export const fetchToken = (): fetchTokenAction => ({ type: FETCH_TOKEN });
export const setRefreshToken = (payload: string): setRefreshTokenAction => ({
  type: SET_REFRESH_TOKEN,
  payload,
});
export const fetchRefreshToken = (): fetchRefreshTokenAction => ({
  type: FETCH_REFRESH_TOKEN,
});

export const setCurrentUser = (payload: string): setCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload,
});

export const fetchCurrentUser = (): fetchCurrentUserAction => ({
  type: FETCH_CURRENT_USER,
});
