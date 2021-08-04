export const SET_SEARCH = "SET_SEARCH";
export const FETCH_SEARCH = "FETCH_SEARCH";
export const SET_TRACKS = "SET_TRACKS";

export interface setSearchAction {
  type: "SET_SEARCH";
  payload: string;
}
export interface fetchSearchAction {
  type: "FETCH_SEARCH";
  payload: string;
}

export const setSearch = (payload: string): setSearchAction => ({
  type: SET_SEARCH,
  payload,
});
export const fetchSearch = (payload: string): fetchSearchAction => ({
  type: FETCH_SEARCH,
  payload,
});

export const setTracks = (payload: any): any => ({
  type: SET_TRACKS,
  payload,
});
