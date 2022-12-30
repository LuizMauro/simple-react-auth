import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";
import { useAuth } from "../hook/authenticator";

const Route = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !!user ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          <Component />
        );
      }}
    />
  );
};

export default Route;
