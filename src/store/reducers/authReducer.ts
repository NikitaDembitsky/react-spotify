const defaultState = {
  isAuthentificated: true,

};

export const SET_IS_AUTHENTIFICATED = "SET_IS_AUTHENTIFICATED";
export const SET_TOKEN = "SET_TOKEN";
export const FETCH_TOKEN = "FETCH_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const FETCH_REFRESH_TOKEN = "FETCH_REFRESH_TOKEN";

const authReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_IS_AUTHENTIFICATED:
      return {
        ...state,
        isAuthentificated: !action.payload,
      };
    case SET_TOKEN:
      return { ...state, access_token: action.payload };
    default:
      return state;
  }
};

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

export { authReducer };
