import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }:any) => {
  const isLogin = useSelector(
    (state: any) => state.authReducer.isAuthentificated
  );
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/search" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
