import {
  resetOptionAction,
  RESET_OPTION,
  setOffsetAction,
  setSearchAction,
  setTracksAction,
  SET_OFFSET,
  SET_SEARCH,
  SET_TRACKS,
} from "./searchActions";

interface searchState {
  searchValue: string;
  tracks: any;
  offset: number;
}

const defaultState: searchState = {
  searchValue: "",
  tracks: "",
  offset: 1,
};

const searchReducer = (
  state = defaultState,
  action:
    | setSearchAction
    | setTracksAction
    | setOffsetAction
    | resetOptionAction
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
        tracks: [...state.tracks, ...action.payload],
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: state.offset + 1,
      };
    case RESET_OPTION:
      return {
        ...state,
        tracks: "",
        offset: 1,
      };

    default:
      return state;
  }
};

export { searchReducer };
