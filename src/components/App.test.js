import { render } from "react-testing-library";
import App from "./App";
import { withReactRouterRoute } from "../../test/testHelpers";

describe("App", () => {
  test("renders without crashing", () => {
    render(withReactRouterRoute(App));
  });
});
