import { Track } from "../../components/SearchForm/SearchForm";
import {
  resetOptionAction,
  SearchActions,
  setOffsetAction,
  setSearchAction,
  setTracksAction,
} from "./searchActions";

interface searchState {
  searchValue: string;
  tracks: Track[];
  offset: number;
}

const defaultState: searchState = {
  searchValue: "",
  tracks: [],
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
    case SearchActions.SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };

    case SearchActions.SET_TRACKS:
      return {
        ...state,
        tracks: [...state.tracks, ...action.payload],
      };
    case SearchActions.SET_OFFSET:
      return {
        ...state,
        offset: state.offset + 1,
      };
    case SearchActions.RESET_OPTION:
      return {
        ...state,
        tracks: [],
        offset: 1,
      };

    default:
      return state;
  }
};

export { searchReducer };
