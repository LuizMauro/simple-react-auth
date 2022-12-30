import React from "react";
import { AuthProvider } from "./authenticator";

const AppProvider = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default AppProvider;
