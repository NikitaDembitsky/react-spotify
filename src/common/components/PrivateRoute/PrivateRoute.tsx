import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "../../../store";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isLogin = useSelector(
    (state: RootState) => state.authReducer.isAuthentificated
  );

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
