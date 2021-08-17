import {
  AuthActions,
  setIsAuthentificatedAction,
  setTokenAction,
  setCurrentUserAction,
  fetchRefreshTokenAction,
} from "./authActions";

export interface User {
  id?: number;
  email?: string;
  country?: string;
  display_name: string;
}
export interface authState {
  isAuthentificated: boolean;
  access_token: string;
  user: User | null;
}

const defaultState: authState = {
  isAuthentificated: true,
  access_token: "",
  user: null,
};

const authReducer = (
  state = defaultState,
  action:
    | setIsAuthentificatedAction
    | setTokenAction
    | setCurrentUserAction
    | fetchRefreshTokenAction
): authState => {
  switch (action.type) {
    case AuthActions.SET_IS_AUTHENTIFICATED:
      return {
        ...state,
        isAuthentificated: !action.payload,
      };
    case AuthActions.SET_TOKEN:
      return { ...state, access_token: action.payload };
    case AuthActions.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };
