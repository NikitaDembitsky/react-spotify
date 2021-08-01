import axios from "axios";
import queryString from "querystring";
import {code} from "../utils";

class AuthApi {
    getToken = () => axios.post(
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

    getRefreshToken = () =>
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
}

export const authApi = new AuthApi();
