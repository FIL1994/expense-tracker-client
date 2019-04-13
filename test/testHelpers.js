import React from "react";
import { Route, MemoryRouter } from "react-router-dom";

export const withReactRouter = (node, initialEntries) => {
  return (
    <MemoryRouter initialEntries={initialEntries} initialIndex={1}>
      {node}
    </MemoryRouter>
  );
};

export const withReactRouterRoute = (
  component,
  { path = "/", initialEntries } = {}
) => {
  return withReactRouter(
    <Route path={path} component={component} />,
    initialEntries
  );
};
