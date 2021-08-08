import { api } from "../store";

class SearchApi {
  searchTrack = (searchValue: string, offset: number) =>
    api.get(`/search?q=${searchValue}&type=track&limit=10&offset=${offset}`);
}

export const searchApi = new SearchApi();
