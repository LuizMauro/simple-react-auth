import React from "react";
import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "./PublicRouter.routes";
import PrivateRoute from "./PrivateRouter.routes";

// Paginas publicas
import { LoginPage } from "../pages/public/login";
import { CreateAccountPage } from "../pages/public/createAccount";

// Paginas privadas
import { HomePage } from "../pages/private/home";

const Routes = () => (
  <Switch>
    <PublicRoute path="/login" exact component={LoginPage} />
    <PublicRoute path="/criar-conta" exact component={CreateAccountPage} />

    <PrivateRoute
      path="/"
      exact
      component={() => <Redirect to="/dashboard" />}
      isPrivate
    />

    <PrivateRoute exact path="/dashboard" component={HomePage} isPrivate />

    {/* <PrivateRoute
      exact
      path="/relatorio/qrcodes/:idQRCode"
      component={RelatorioQRCode}
      isPrivate
    /> */}
  </Switch>
);

export default Routes;
