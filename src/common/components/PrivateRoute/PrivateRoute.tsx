import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RootState } from "../../../store";

const PrivateRoute: React.FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLogin = useSelector(
    (state: RootState) => state.authReducer.isAuthentificated
  );
  const ComponentToRender = Component as React.ElementType;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <ComponentToRender {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
