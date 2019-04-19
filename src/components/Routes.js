import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";

const Routes = () => {
  const isLoggedIn = localStorage.token !== undefined;

  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
