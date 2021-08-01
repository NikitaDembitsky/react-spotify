import {SET_IS_AUTHENTIFICATED, SET_TOKEN} from "./authActions";

const defaultState = {
  isAuthentificated: true,
};

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

export { authReducer };
