import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setOffset,
  fetchSearch,
  resetOption,
} from "../../store/search/searchActions";
import "./SearchForm.css";
import SearchResult from "../SearchResult/SearchResult";
import { Button } from "@material-ui/core";

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
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(fetchSearch(search));
      dispatch(setOffset(offset));
    }
  };
  const handleButtonChange = () => {
    if (searchValue !== search) {
      dispatch(resetOption());
      dispatch(fetchSearch(search));
    } else {
      dispatch(fetchSearch(search));
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
        />
        <Button type="submit" onClick={handleButtonChange} disabled={!search}>
          Submit
        </Button>
      </div>
      <div className="search__result">
        {tracks
          ? tracks.map((track: any, idx: number) => (
              <SearchResult
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
