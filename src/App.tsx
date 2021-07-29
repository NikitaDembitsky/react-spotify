import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import "./App.css";
import { getToken, refreshToken } from "./authenticServices";
import { code, token } from "./utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import HomePage from "./components/HomePage/HomePage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

const App: React.FC = () => {
  useEffect(() => {
    if (code && !token) {
      getToken();
      refreshToken();
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <PublicRoute exact restricted={false} path="/" component={HomePage} />
          <PrivateRoute path="/login" component={Login} />
          <PrivateRoute path="/search" component={SearchForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
