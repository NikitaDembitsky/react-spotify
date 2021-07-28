import axios from "axios";
import queryString from "querystring";
import { code } from "./utils";
import { baseURL } from "./utils";

const { REACT_APP_REDIRECT_URI, REACT_APP_TOKEN_URI, REACT_APP_AUTH_KEY }: any =
  process.env;

export const getToken = async () => {
  return await axios
    .post(
      REACT_APP_TOKEN_URI,
      queryString.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: REACT_APP_REDIRECT_URI,
      }),
      {
        headers: {
          authorization: `Basic ${REACT_APP_AUTH_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    });
};

export const refreshToken = async () => {
  return await axios
    .post(
      REACT_APP_TOKEN_URI,
      queryString.stringify({
        grant_type: "refresh_token",
        refresh_token: localStorage.getItem("refresh_token"),
      }),
      {
        headers: {
          authorization: `Basic ${REACT_APP_AUTH_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(console.log);
};

axios.defaults.baseURL = baseURL;

const interceptor = axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status !== 400) {
      alert("h")
      return Promise.reject(error);
    }
    axios.interceptors.response.eject(interceptor);

    return axios
      .post("/api/refresh_token", {
        'refresh_token': localStorage.getItem('access_token'),
      })
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("access_token", JSON.stringify(response.data));
        error.response.config.headers["Authorization"] =
          "Bearer " + response.data.access_token;
        return axios(error.response.config);
      })
      .catch((error) => {
        localStorage.setItem("access_token", "");
        return Promise.reject(error);
      });
  }
);
export async function searchValue(search: any) {
  return await axios
    .get(
      `https://api.spotify.com/v1/search?q=${search}&type=track&limit=10&offset=5`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
    .then((res) => console.log(res.data.tracks.items));
}
