import axios from "axios";
import queryString from "querystring";
import { code, loginUrl, tokenUrl } from "./spotify";
import { scopes } from "./spotify";
import { useHistory } from "react-router-dom";

const {
  REACT_APP_REDIRECT_URI,
  REACT_APP_TOKEN_URI,
  REACT_APP_AUTH_KEY,
  REACT_APP_AUTH_END_POINT,
  REACT_APP_CLIENT_ID,
}: any = process.env;

export const getToken = (): void => {
  window.location.href  = tokenUrl;

  // fetch(REACT_APP_TOKEN_URI, {
  //   method: "POST",
  //   headers: {
  //     authorization: `Basic ${REACT_APP_AUTH_KEY}`,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: queryString.stringify({
  //     grant_type: "authorization_code",
  //     code,
  //     redirect_uri: REACT_APP_REDIRECT_URI,
  //   }),
  // }).then(console.log);
};

export function getCodeValue() {
  window.location.href = loginUrl;

  // history.push(loginUrl);
  // try {
  //   const res = await axios.get(
  //     `https://cors-anywhere.herokuapp.com/${REACT_APP_AUTH_END_POINT}`,
  //     {
  //       headers: {
  //         "Access-Control-Allow-Headers":
  //           "Origin, X-Requested-With, Content-Type, Accept",
  //       },
  //       params: {
  //         client_id: REACT_APP_CLIENT_ID,
  //         response_type: "code",
  //         redirect_uri: REACT_APP_REDIRECT_URI,
  //         scope: scopes.join("%20"),
  //       },
  //     }
  //   );
  //   return res;
  // } catch (e) {
  //   console.log(e.response);
  // }
  return <div></div>;
}
