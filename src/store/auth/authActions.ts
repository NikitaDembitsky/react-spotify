export const SET_IS_AUTHENTIFICATED = "SET_IS_AUTHENTIFICATED";
export const SET_TOKEN = "SET_TOKEN";
export const FETCH_TOKEN = "FETCH_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const FETCH_REFRESH_TOKEN = "FETCH_REFRESH_TOKEN";

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

export const setToken = (payload: any) => ({ type: SET_TOKEN, payload });
export const fetchToken = () => ({ type: FETCH_TOKEN });
export const setRefreshToken = (payload: any) => ({
    type: SET_REFRESH_TOKEN,
    payload,
});
export const fetchRefreshToken = () => ({ type: FETCH_REFRESH_TOKEN });