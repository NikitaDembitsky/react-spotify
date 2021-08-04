import axios from "axios";

class SearchApi {
  searchTrack = (searchValue: string) =>
    axios.get(
      `https://api.spotify.com/v1/search?q=${searchValue}&type=track&limit=10&offset=5`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
}

export const searchApi = new SearchApi();
