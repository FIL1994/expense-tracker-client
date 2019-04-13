import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./login/Login";

const Routes = () => {
  const isLoggedIn = localStorage.token !== undefined;

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default Routes;
