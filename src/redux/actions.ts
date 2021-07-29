import { SET_IS_AUTHENTIFICATED } from "./types";

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
