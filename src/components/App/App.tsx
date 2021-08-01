import { useEffect } from "react";
import "./App.css";
import { refreshToken } from "../../authenticServices";
import { code, token } from "../../utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../../common/components/PrivateRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { fetchRefreshToken, fetchToken } from "../../store/auth/authReducer";

const App: React.FC = () => {
  const dispath = useDispatch();
  console.log(localStorage.getItem("search"));
  useEffect(() => {
    if (code && !token) {
      dispath(fetchToken());
      dispath(fetchRefreshToken());
    }
  }, []);

  return (
    <div className="app">
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
