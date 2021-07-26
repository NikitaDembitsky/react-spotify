import { useState } from "react";
import { searchValue } from "../../authenticServices";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: any) => {
    const search = event.target.value;
    setSearch(search);
  };

  return (
    <div>
      <input onChange={handleInputChange} value={search} />
      <button type="submit" onSubmit={searchValue}>
        Submit
      </button>
    </div>
  );
};

export default SearchForm;
