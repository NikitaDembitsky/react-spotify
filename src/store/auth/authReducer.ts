import {
  SET_IS_AUTHENTIFICATED,
  SET_CURRENT_USER,
  SET_TOKEN,
} from "./authActions";

interface authState {
  isAuthentificated: boolean;
  access_token: string;
  user: any | null;
}

const defaultState: authState = {
  isAuthentificated: true,
  access_token: "",
  user: null,
};

const authReducer = (state = defaultState, action: any): authState => {
  switch (action.type) {
    case SET_IS_AUTHENTIFICATED:
      return {
        ...state,
        isAuthentificated: !action.payload,
      };
    case SET_TOKEN:
      return { ...state, access_token: action.payload };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };
