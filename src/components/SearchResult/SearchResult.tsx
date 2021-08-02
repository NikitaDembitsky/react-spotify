import { searchApi } from "../../api/searchApi";
import { useSelector } from "react-redux";
import { setTracks } from "../../store/search/searchReducer";

const SearchResult = () => {
  const tracks = useSelector((state: any) => state.searchReducer.tracks);
  console.log(tracks)
 
  return <div></div>;
};

export default SearchResult;
