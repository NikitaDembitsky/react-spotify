import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import { code } from "./spotify";
import { useEffect } from "react";
import { getToken } from "./authenticServices";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  useEffect(() => {
    let code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      console.log(getToken());
      code = "";
    }
  }, []);

  return (
    <Router>
      <div className="app">{code ? <DashBoard code={code} /> : <Login />}</div>
    </Router>
  );
};
export default App;
