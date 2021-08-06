import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../../common/components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentUser,
  fetchToken,
  setToken,
} from "../../store/auth/authActions";
import Header from "../Header/Header";
import { RootState } from "../../store";
import { createBrowserHistory } from "history";

const App: React.FC = () => {
  const dispath = useDispatch();
  const history = useHistory();

  const token = useSelector(
    (state: RootState) => state.authReducer.access_token
  );

  const user = useSelector((state: RootState) => state.authReducer.user);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispath(fetchToken());
    }
  }, [dispath]);

  useEffect(() => {
    if (token) {
      dispath(fetchCurrentUser());
    }
  }, [dispath, token]);

  useEffect(() => {
    if (user) {
      console.log("push");
      history.push("/search");
    }
  }, [history, user]);

  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/search" component={SearchForm} />
    </div>
  );
};
export default App;
