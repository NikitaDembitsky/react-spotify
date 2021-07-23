import axios from "axios";
import queryString from "querystring";
import { code } from "./spotify";
import { scopes } from "./spotify";

const {
  REACT_APP_REDIRECT_URI,
  REACT_APP_TOKEN_URI,
  REACT_APP_AUTH_KEY,
  REACT_APP_AUTH_END_POINT,
  REACT_APP_CLIENT_ID,
}: any = process.env;

export const getToken = (): void => {
  fetch(REACT_APP_TOKEN_URI, {
    method: "POST",
    headers: {
      authorization: `Basic ${REACT_APP_AUTH_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: REACT_APP_REDIRECT_URI,
    }),
  }).then(console.log);
};

export const getCodeValue = async () => {
  try {
    const res = await axios.get(REACT_APP_AUTH_END_POINT, {
      params: {
        client_id: REACT_APP_CLIENT_ID,
        response_type: "code",
        redirect_uri: REACT_APP_REDIRECT_URI,
        scope: scopes.join("%20"),
      },
    });
    return res;
  } catch (e) {
    console.log(e.response);
  }
};
