import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import axiosMocks from "./axiosMocks";

beforeAll(() => {
  axiosMocks();
});

beforeEach(() => {
  axiosMocks();
});
