import axios from "axios";
import queryString from "querystring";
import { code, loginUrl, tokenUrl } from "./spotify";
import { scopes } from "./spotify";
import { useHistory } from "react-router-dom";

const { REACT_APP_REDIRECT_URI, REACT_APP_TOKEN_URI, REACT_APP_AUTH_KEY }: any =
  process.env;

let token: any;
let refresh_token: any;
console.log(refresh_token);
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

export const getCodeValue = () => {
  window.location.href = loginUrl;
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
    .then((res) => localStorage.setItem("new_token", res.data.access_token));
};

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

export const updateToken = () => {
  const newToken: any = localStorage.getItem("new_token");
  localStorage.setItem("access_token", newToken);
  console.log(newToken);
};
