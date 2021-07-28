import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import "./App.css";
import { getToken, refreshToken } from "./authenticServices";
import { code, token } from "./utils";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import HomePage from "./components/HomePage/HomePage";

const App: React.FC = (props) => {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  useEffect(() => {
    if (code && !token) {
      getToken();
      refreshToken();
    }
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={SearchForm} />
        {/* {code && token ? <SearchForm /> : <Login />} */}
      </Switch>
    </div>
  );
};
export default App;
