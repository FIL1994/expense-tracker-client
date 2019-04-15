import React from "react";
import Routes from "./Routes";

import connectToSocket from "../socket";

window.connectToSocket = connectToSocket;

const App = () => {
  return <Routes />;
};

export default App;
