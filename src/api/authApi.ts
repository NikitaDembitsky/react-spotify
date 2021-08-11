import queryString from "querystring";
import { account, api } from "../store";
import { code } from "../utils";

declare let process: {
  env: {
    REACT_APP_REDIRECT_URI: string;
  };
};

const { REACT_APP_REDIRECT_URI } = process.env;

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
