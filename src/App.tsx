import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import { code } from "./spotify";
import { useEffect } from "react";
import { encode } from "js-base64";

const App: React.FC = () => {
  console.log(
    encode("f24e61e7ed5b4100ad71dd99bb93d5d4:8bae4f346b4241adb1453b38931c7b01")
  );
  useEffect(() => {
    let code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          authorization: `Basic ${encode(
            "f24e61e7ed5b4100ad71dd99bb93d5d4:8bae4f346b4241adb1453b38931c7b01"
          )}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          grant_type: "authorization_code",
          code,
          redirect_uri: "http://localhost:3000/",
        }),
      }).then(console.log);
      code = "";
    }
  }, []);

  return (
    <div className="app">{code ? <DashBoard code={code} /> : <Login />}</div>
  );
};
export default App;
