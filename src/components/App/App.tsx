import { useEffect } from "react";
import "./App.css";
import { code, token } from "../../utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../../common/components/PrivateRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { fetchRefreshToken, fetchToken } from "../../store/auth/authActions";
import SearchResult from "../SearchResult/SearchResult";

const App: React.FC = () => {
  const dispath = useDispatch();
  useEffect(() => {
    if (code && !token) {
      dispath(fetchToken());
      dispath(fetchRefreshToken());
    }
  });

  return (
    <div className="app">
      <SearchResult />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/search" component={SearchForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
