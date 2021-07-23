import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import { code } from "./spotify";
import { useEffect } from "react";
import { getCodeValue, getToken } from "./authenticServices";

const App: React.FC = () => {
  useEffect(() => {
    let code = new URLSearchParams(window.location.search).get("code");
    
    if (code) {
      getToken();
      code = "";
    }
  }, []);

  return (
    <div className="app">{code ? <DashBoard code={code} /> : <Login />}</div>
  );
};
export default App;
