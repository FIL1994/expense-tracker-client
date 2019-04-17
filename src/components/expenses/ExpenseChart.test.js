import React from "react";
import { render } from "react-testing-library";
import ExpenseChart from "./ExpenseChart";

describe("ExpenseChart", () => {
  test("renders without crashing", () => {
    render(<ExpenseChart expenses={[]} />);
  });
});
