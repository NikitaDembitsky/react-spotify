import axios from "axios";
import queryString from "querystring";
import { useDispatch } from "react-redux";
import { code } from "./utils";
import { baseURL } from "./utils";

const { REACT_APP_REDIRECT_URI, REACT_APP_TOKEN_URI, REACT_APP_AUTH_KEY }: any =
  process.env;

export const fetchToken = () =>
  axios.post(
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
  );

export const refreshToken = () =>
  axios.post(
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
  );

axios.defaults.baseURL = baseURL;

const interceptor = axios.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    axios.interceptors.response.eject(interceptor);

    try {
      const response = await axios.post("/api/refresh_token", {
        refresh_token: JSON.parse(localStorage.getItem("access_token") || "{}")[
          "refresh_token"
        ],
      });
      console.log(response.data.refresh_token);
      localStorage.setItem("access_token", JSON.stringify(response.data));
      error.response.config.headers["Authorization"] =
        "Bearer " + response.data.access_token;
      return await axios(error.response.config);
    } catch (error_1) {
      localStorage.setItem("access_token", "");
      return await Promise.reject(error_1);
    }
  }
);

export const searchTrack = (searchValue: string) =>
  axios.get(
    `https://api.spotify.com/v1/search?q=${searchValue}&type=track&limit=10&offset=5`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
