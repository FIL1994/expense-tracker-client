import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Segment, Form } from "semantic-ui-react";
import "./login.less";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function login() {
    setIsLoading(true);

    try {
      const url = `http://localhost:4000/api/users/signin`;

      const res = await axios.post(
        url,
        { email, password },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );

      const { token } = res.data;
      localStorage.setItem("token", token);
      setMessage("Success!");
    } catch (e) {
      console.log("Error", e);
      setMessage(e.message);
    }

    setIsLoading(false);
  }

  return (
    <div className="login">
      <Segment color="blue">
        <Form>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              fluid
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              fluid
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" primary onClick={login} loading={isLoading}>
            Sign In
          </Button>
        </Form>
        <div className="message">{message}</div>
      </Segment>
    </div>
  );
};

export default Login;
