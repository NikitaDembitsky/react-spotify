import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../../store/reducers//searchReducer";
import "./SearchForm.css";

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleInputChange = (event: any) => {
    const search = event.target.value;
    setSearch(search);
  };
  return (
    <div className="search">
      <div className="search__title">
        <Link to="/">HOME</Link>
      </div>
      <div className="search__content">
        <input onChange={handleInputChange} value={search} />
        <button type="submit" onClick={() => dispatch(fetchSearch(search))}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default SearchForm;
