interface searchState {
  searchValue: string;
  tracks: any
}

const defaultState: searchState = {
  searchValue: "",
  tracks: ""
};

export const SET_SEARCH = "SET_SEARCH";
export const FETCH_SEARCH = "FETCH_SEARCH";
export const SET_TRACKS = "SET_TRACKS";

const searchReducer = (
  state = defaultState,
  action: any
): searchState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
};

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

export { searchReducer };
