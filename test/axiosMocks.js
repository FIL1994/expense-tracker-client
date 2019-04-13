import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosMock = new MockAdapter(axios);

export default () => {
  axiosMock.onPost(/signin/).reply(200, { token: "abc" });
};

export { axiosMock };
