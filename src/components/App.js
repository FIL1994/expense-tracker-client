import React from "react";
import Login from "./login/Login";

const App = props => {
  return (
    <div>
      {process.env.APP_NAME}
      <Login />
    </div>
  );
};

export default App;
