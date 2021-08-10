export const SET_SEARCH = "SET_SEARCH";
export const FETCH_SEARCH = "FETCH_SEARCH";
export const SET_TRACKS = "SET_TRACKS";
export const SET_OFFSET = "SET_OFFSET";
export const FETCH_OFFSET = "FETCH_OFFSET";
export const RESET_OPTION = "RESET_OPTION";

export interface setSearchAction {
  type: "SET_SEARCH";
  payload: string;
}
export interface fetchSearchAction {
  type: "FETCH_SEARCH";
  payload: string;
}
export interface setOffsetAction {
  type: "SET_OFFSET";
  payload: number;
}
export interface fetchOffsetAction {
  type: "FETCH_OFFSET";
  payload: number;
}
export interface setTracksAction {
  type: "SET_TRACKS";
  payload: any;
}

export interface resetOptionAction {
  type: "RESET_OPTION";
}

export const setSearch = (payload: string): setSearchAction => ({
  type: SET_SEARCH,
  payload,
});
export const fetchSearch = (payload: string): fetchSearchAction => ({
  type: FETCH_SEARCH,
  payload,
});

export const setTracks = (payload: string): setTracksAction => ({
  type: SET_TRACKS,
  payload,
});

export const setOffset = (payload: number): setOffsetAction => ({
  type: SET_OFFSET,
  payload,
});

export const fetchOffset = (payload: number): fetchOffsetAction => ({
  type: FETCH_OFFSET,
  payload,
});

export const resetOption = (): resetOptionAction => ({
  type: RESET_OPTION,
});
