import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchSearch } from "../../store/search/searchActions";
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

  return (
    <div className="search">
      <div className="search__content">
        <input
          className="search__input"
          onChange={handleInputChange}
          placeholder="Search"
          value={search}
        />
        <Button type="submit" onClick={() => dispatch(fetchSearch(search))}>
          Submit
        </Button>
      </div>
      <div className="search__result">
        {tracks
          ? tracks.map((track: any) => (
              <SearchResult
                key={track.id}
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
