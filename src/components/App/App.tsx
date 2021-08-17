import { useEffect } from "react";
import "./App.css";
import { Route, useHistory } from "react-router-dom";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../../common/components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, fetchToken } from "../../store/auth/authActions";
import Header from "../Header/Header";
import { RootState } from "../../store";
import ErrorPage from "../ErrorPage/ErrorPage";

const App: React.FC = () => {
  const dispath = useDispatch();
  const history = useHistory();

  const token = useSelector(
    (state: RootState) => state.authReducer.access_token
  );

  const localToken = localStorage.getItem("access_token");
  const user = useSelector((state: RootState) => state.authReducer.user);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispath(fetchToken());
    }
  }, [dispath]);

  useEffect(() => {
    if (token || localToken) {
      dispath(fetchCurrentUser());
    }
  }, [dispath, token, localToken]);

  useEffect(() => {
    if (user) {
      history.push("/search");
    }else{
      history.push("/")
    }
  }, [history, user]);

  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/search" component={SearchForm} />
      <Route path="/page-not-found" component={ErrorPage} />
    </div>
  );
};
export default App;
