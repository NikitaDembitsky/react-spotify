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
    .then(console.log);
};

export function getCodeValue() {
  window.location.href = loginUrl;
}

export function searchValue(){
  return axios.get("https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&limit=10&offset=5",{
    headers:{
      authorization: "Bearer BQAcCn03Ok1GHDIiu8qu-dMKes0ZDKaVo5JQDGcWdscEHPCgtJcD2JivNDo8tsaHIEtoS7NOmJ69pnPgIGrqSCGytDHgnr9l1JEsGt3TasiTGzCRu0lT2ajBfOQDT73h11CBQPQs7jlNW65XvT3erxuVrhMhhUQhhCQCgM0--k3IwutyYSP6YA"
    }
  }).then(console.log)
}
