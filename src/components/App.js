import React from "react";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      {process.env.APP_NAME}
      <Routes />
    </>
  );
};

export default App;
