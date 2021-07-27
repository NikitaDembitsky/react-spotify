import Login from "./components/Login/Login";
import { code } from "./spotify";
import { useEffect } from "react";
import "./App.css";
import { getToken, refreshToken, updateToken } from "./authenticServices";
import { BrowserRouter as Router } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";

const App: React.FC = () => {
  useEffect(() => {
    let code = new URLSearchParams(window.location.search).get("code");

    if (code) {
     
      getToken();
      refreshToken();
      code = "";
    }
  }, []);

  return (
    <Router>
      <div className="app">{code ? <SearchForm /> : <Login />}</div>
    </Router>
  );
};
export default App;
