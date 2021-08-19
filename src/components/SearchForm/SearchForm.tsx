import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setOffset,
  getSearchResult,
  resetOption,
} from "../../store/search/searchActions";
import "./SearchForm.css";
import TrackCard from "../TrackCard/TrackCard";
import { Button } from "@material-ui/core";

export interface Track {
  name: string;
  album: {
    images: { url: string }[];
  };
  artists: {
    name: string;
  }[];
}
const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearch(search);
  };
  const tracks = useSelector((state: RootState) => state.searchReducer.tracks);
  const offset = useSelector((state: RootState) => state.searchReducer.offset);
  const searchValue = useSelector(
    (state: RootState) => state.searchReducer.searchValue
  );

  useEffect(() => {
    return () => {
      if (tracks) {
        dispatch(resetOption());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(getSearchResult(search));
      dispatch(setOffset(offset));
    }
  };
  const onClickHandler = () => {
    if (searchValue !== search) {
      dispatch(resetOption());
      dispatch(getSearchResult(search));
    } else {
      dispatch(getSearchResult(search));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      onClickHandler();
    }
  };

  return (
    <div className="search">
      <div className="search__content">
        <input
          className="search__input"
          onChange={handleInputChange}
          placeholder="Search"
          value={search}
          onKeyDown={onKeyDown}
        />
        <Button type="submit" onClick={onClickHandler} disabled={!search}>
          Submit
        </Button>
      </div>
      <div className="search__result">
        {tracks
          ? tracks.map((track: Track, idx: number) => (
              <TrackCard
                key={idx}
                name={track.name}
                image={track.album.images[0].url}
                artist={track.artists[0].name}
              />
            ))
          : null}
      </div>
    </div>
  );
};
export default SearchForm;
