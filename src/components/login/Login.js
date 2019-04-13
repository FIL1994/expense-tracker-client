import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const url = `http://localhost:4000/api/users/signin`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      console.log("res", res);
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <div>
      <Input
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        label="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={login}>Sign In</Button>
    </div>
  );
};

export default Login;
