import axios from "axios";
import queryString from "querystring";
import { baseURL, code } from "../utils";

const {
  REACT_APP_REDIRECT_URI,
  REACT_APP_AUTH_KEY,
  REACT_APP_ACCOUNT_SPOTIFY,
  REACT_APP_API_SPOTIFY,
}: any = process.env;

class AuthApi {
  getToken = () =>
    axios.post(
      REACT_APP_ACCOUNT_SPOTIFY + "api/token",
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

  getRefreshToken = () =>
    axios.post(
      REACT_APP_ACCOUNT_SPOTIFY + "api/token",
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

  getCurrentUser = () => {
    return axios.get(REACT_APP_API_SPOTIFY + baseURL + "/me", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  };
}

export const authApi = new AuthApi();
