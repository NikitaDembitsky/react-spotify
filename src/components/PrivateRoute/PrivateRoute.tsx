import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { code, token } from "../../utils";
import { setIsAuthentificated } from "../../redux/actions";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const dispath = useDispatch();
  const isLogin = useSelector(
    (state: any) => state.authReducer.isAuthentificated
  );
  if (token && code) {
    dispath(setIsAuthentificated(isLogin));
  }

  console.log(isLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
