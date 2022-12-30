import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppProviders from "./hook";
import Routes from "./router";

const App = () => (
  <BrowserRouter>
    <AppProviders>
      <Routes />
    </AppProviders>
  </BrowserRouter>
);

export default App;
