const defaultState = {
  searchValue: "",
};

export const SET_SEARCH = "SET_SEARCH";
export const FETCH_SEARCH = "FETCH_SEARCH";

const searchReducer = (state = defaultState, action: any) => {
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

export const setSearch = (payload: any) => ({ type: SET_SEARCH, payload });
export const fetchSearch = (payload: any) => ({ type: FETCH_SEARCH, payload });

export { searchReducer };
