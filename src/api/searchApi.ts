import { api } from "../store";

class SearchApi {
  searchTrack = (searchValue: string) =>
    api.get(`/search?q=${searchValue}&type=track&limit=10&offset=5`);
}

export const searchApi = new SearchApi();
