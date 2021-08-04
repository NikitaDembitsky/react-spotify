import {SET_SEARCH,SET_TRACKS} from "./searchActions"

interface searchState {
  searchValue: string;
  tracks: any;
}

const defaultState: searchState = {
  searchValue: "",
  tracks: "",
};

const searchReducer = (state = defaultState, action: any): searchState => {
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

export { searchReducer };
