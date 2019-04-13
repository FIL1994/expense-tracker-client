import React from "react";
import { render } from "react-testing-library";
import Login from "./Login";

describe("Login", () => {
  test("renders without crashing", () => {
    render(<Login />);
  });
});
