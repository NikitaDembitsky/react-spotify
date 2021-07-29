import { SET_IS_AUTHENTIFICATED } from "../types";

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
    default:
      return state;
  }
};

export { authReducer };
