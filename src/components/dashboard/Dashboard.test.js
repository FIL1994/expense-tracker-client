import React from "react";
import { render } from "react-testing-library";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  test("renders without crashing", () => {
    render(<Dashboard />);
  });
});
