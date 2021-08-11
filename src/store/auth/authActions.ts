import { User } from "./authReducer";

export enum AuthActions {
  SET_IS_AUTHENTIFICATED = "SET_IS_AUTHENTIFICATED",
  SET_TOKEN = "SET_TOKEN",
  FETCH_TOKEN = "FETCH_TOKEN",
  SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN",
  FETCH_REFRESH_TOKEN = "FETCH_REFRESH_TOKEN",
  SET_CURRENT_USER = "SET_CURRENT_USER",
  FETCH_CURRENT_USER = "FETCH_CURRENT_USER",
}

export interface setIsAuthentificatedAction {
  type: AuthActions.SET_IS_AUTHENTIFICATED;
  payload: boolean;
}

export interface setTokenAction {
  type: AuthActions.SET_TOKEN;
  payload: string;
}
export interface fetchTokenAction {
  type: AuthActions.FETCH_TOKEN;
}

export interface setRefreshTokenAction {
  type: AuthActions.SET_REFRESH_TOKEN;
  payload: string;
}

export interface fetchRefreshTokenAction {
  type: AuthActions.FETCH_REFRESH_TOKEN;
}

export interface setCurrentUserAction {
  type: AuthActions.SET_CURRENT_USER;
  payload: User;
}

export interface fetchCurrentUserAction {
  type: AuthActions.FETCH_CURRENT_USER;
}

export const setIsAuthentificated = (
  data: boolean
): setIsAuthentificatedAction => ({
  type: AuthActions.SET_IS_AUTHENTIFICATED,
  payload: data,
});

export const setToken = (payload: string): setTokenAction => ({
  type: AuthActions.SET_TOKEN,
  payload,
});
export const fetchToken = (): fetchTokenAction => ({
  type: AuthActions.FETCH_TOKEN,
});
export const setRefreshToken = (payload: string): setRefreshTokenAction => ({
  type: AuthActions.SET_REFRESH_TOKEN,
  payload,
});
export const fetchRefreshToken = (): fetchRefreshTokenAction => ({
  type: AuthActions.FETCH_REFRESH_TOKEN,
});

export const setCurrentUser = (payload: User): setCurrentUserAction => ({
  type: AuthActions.SET_CURRENT_USER,
  payload,
});

export const fetchCurrentUser = (): fetchCurrentUserAction => ({
  type: AuthActions.FETCH_CURRENT_USER,
});
