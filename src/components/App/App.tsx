import { useEffect } from "react";
import "./App.css";
import { code, token } from "../../utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import HomePage from "../HomePage/HomePage";
import PrivateRoute from "../../common/components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../../store/auth/authActions";
import Header from "../Header/Header";

const App: React.FC = () => {
  const dispath = useDispatch();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code")
    if (code) {
      dispath(fetchToken());
    }
  });

  useEffect(() => {
    if(user){
      history.push(/search)
    }
  }, [user])

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/search" component={SearchForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
