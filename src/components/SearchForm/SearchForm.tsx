import { useState } from "react";
import { searchValue } from "../../authenticServices";

const SearchForm: React.FC = () => {
  const [search, setSearch] = useState("");
  const handleInputChange = (event: any) => {
    const search = event.target.value;
    setSearch(search);
  };
  return (
    <div>
      <input onChange={handleInputChange} value={search} />
      <button type="submit" onClick={() => searchValue(search)}>
        Submit
      </button>
    </div>
  );
};

export default SearchForm;
