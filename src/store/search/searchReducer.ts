interface searchState {
  searchValue: string;
}

const defaultState: searchState = {
  searchValue: "",
};

export const SET_SEARCH = "SET_SEARCH";
export const FETCH_SEARCH = "FETCH_SEARCH";

const searchReducer = (
  state = defaultState,
  action: setSearchAction
): searchState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
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

export { searchReducer };
