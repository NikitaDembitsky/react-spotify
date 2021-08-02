import {
  isAuthentificatedAction,
  setTokenAction,
  SET_IS_AUTHENTIFICATED,
  SET_TOKEN,
} from "./authActions";

interface authState {
  isAuthentificated: boolean;
  access_token: string;
}

const defaultState: authState = {
  isAuthentificated: true,
  access_token: "",
};

const authReducer = (
  state = defaultState,
  action: isAuthentificatedAction | setTokenAction
): authState => {
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

export { authReducer };
