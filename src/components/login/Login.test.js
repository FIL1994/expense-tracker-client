import React from "react";
import { render, fireEvent, act, waitForElement } from "react-testing-library";

import Login from "./Login";
import { axiosMock } from "../../../test/axiosMocks";

describe("Login", () => {
  test("renders without crashing", () => {
    render(<Login />);
  });

  test("login succeeds", async () => {
    const { getByText, getByLabelText } = render(<Login />);

    const email = getByLabelText("Email");
    const password = getByLabelText("Password");
    const signIn = getByText("Sign In");

    act(() => {
      fireEvent.change(email, { target: { value: "user@email.com" } });
      fireEvent.change(password, { target: { value: "password" } });
      fireEvent.click(signIn);
    });

    await waitForElement(() => getByText("Success", { exact: false }));
  });

  test("login fails", async () => {
    axiosMock.onPost(/signin/).passThrough();

    axiosMock
      .onPost(/signin/)
      .reply(401, { errors: { detail: "Unauthorized" } });

    const { getByText, getByLabelText } = render(<Login />);

    const email = getByLabelText("Email");
    const password = getByLabelText("Password");
    const signIn = getByText("Sign In");

    act(() => {
      fireEvent.change(email, { target: { value: "user@email.com" } });
      fireEvent.change(password, { target: { value: "password" } });
      fireEvent.click(signIn);
    });

    await waitForElement(() => getByText("failed", { exact: false }));
  });
});
