import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import "./App.css";
import { getToken, refreshToken } from "./authenticServices";
import { code, token } from "./utils";
import { BrowserRouter as Router } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";

const App: React.FC = () => {
  const [isAuthentificated, setIsAuthentificated] = useState(false);

  useEffect(() => {
    if (code && !token) {
      getToken();
      refreshToken();
    }
  }, []);

  return (
    <Router>
      <div className="app">{code && token ? <SearchForm /> : <Login />}</div>
    </Router>
  );
};
export default App;
