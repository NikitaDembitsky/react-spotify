export const SET_IS_AUTHENTIFICATED = "SET_IS_AUTHENTIFICATED";
export const SET_TOKEN = "SET_TOKEN";
export const FETCH_TOKEN = "FETCH_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const FETCH_REFRESH_TOKEN = "FETCH_REFRESH_TOKEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const PUSH_HISTORY = "PUSH_HISTORY"

export interface isAuthentificatedAction {
  type: "SET_IS_AUTHENTIFICATED";
  payload: boolean;
}

export const setIsAuthentificated = (
  data: boolean
): isAuthentificatedAction => ({
  type: SET_IS_AUTHENTIFICATED,
  payload: data,
});

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

export const setCurrentUser = (payload: any): any => ({
  type: SET_CURRENT_USER,
  payload,
});

export const pushHistory = (payload: any):any =>({
  type: PUSH_HISTORY,
  payload
})

export const fetchCurrentUser = (): any => ({
  type: FETCH_CURRENT_USER,
});
