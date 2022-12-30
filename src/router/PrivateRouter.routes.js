import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";
import { useAuth } from "../hook/authenticator";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/login" : "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
