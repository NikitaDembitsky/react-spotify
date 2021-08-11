import { Track } from "../../components/SearchForm/SearchForm";

export enum SearchActions {
  SET_TRACKS = "SET_TRACKS",
  SET_SEARCH = "SET_SEARCH",
  FETCH_SEARCH = "FETCH_SEARCH",
  SET_OFFSET = "SET_OFFSET",
  FETCH_OFFSET = "FETCH_OFFSET",
  RESET_OPTION = "RESET_OPTION",
}

export interface setSearchAction {
  type: SearchActions.SET_SEARCH;
  payload: string;
}
export interface fetchSearchAction {
  type: SearchActions.FETCH_SEARCH;
  payload: string;
}
export interface setOffsetAction {
  type: SearchActions.SET_OFFSET;
  payload: number;
}
export interface fetchOffsetAction {
  type: SearchActions.FETCH_OFFSET;
  payload: number;
}
export interface setTracksAction {
  type: SearchActions.SET_TRACKS;
  payload: Track[];
}

export interface resetOptionAction {
  type: SearchActions.RESET_OPTION;
}

export const setSearch = (payload: string): setSearchAction => ({
  type: SearchActions.SET_SEARCH,
  payload,
});
export const getSearchResult = (payload: string): fetchSearchAction => ({
  type: SearchActions.FETCH_SEARCH,
  payload,
});

export const setTracks = (payload: Track[]): setTracksAction => ({
  type: SearchActions.SET_TRACKS,
  payload,
});

export const setOffset = (payload: number): setOffsetAction => ({
  type: SearchActions.SET_OFFSET,
  payload,
});

export const fetchOffset = (payload: number): fetchOffsetAction => ({
  type: SearchActions.FETCH_OFFSET,
  payload,
});

export const resetOption = (): resetOptionAction => ({
  type: SearchActions.RESET_OPTION,
});
