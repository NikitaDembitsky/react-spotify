import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../../common/components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentUser,
  fetchToken,
} from "../../store/auth/authActions";
import Header from "../Header/Header";
import { RootState } from "../../store";
import { createBrowserHistory } from "history";

const App: React.FC = () => {
  const dispath = useDispatch();
  const history = createBrowserHistory();
  const user = useSelector((state: RootState) => state.authReducer.user);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispath(fetchToken());
    }
    const token = localStorage.getItem("access_token");
    if (token) {
      dispath(fetchCurrentUser());
    }
  }, [dispath]);

  useEffect(() => {
    if (user) {
      console.log("push");
      history.push("/search");
      // window.location.href = "/search";
    }
  }, [user]);

  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/search" component={SearchForm} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
