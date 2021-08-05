import axios from "axios";
import queryString from "querystring";
import { account, api } from "../store";
import { code } from "../utils";

const { REACT_APP_REDIRECT_URI }: any = process.env;

class AuthApi {
  getToken = () => {
    return account.post(
      "api/token",
      queryString.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: REACT_APP_REDIRECT_URI,
      })
    );
  };

  getRefreshToken = () => {
    return account.post(
      "api/token",
      queryString.stringify({
        grant_type: "refresh_token",
        refresh_token: localStorage.getItem("refresh_token"),
      })
    );
  };

  getCurrentUser = () => {
    return api.get("/me");
  };
}

export const authApi = new AuthApi();
