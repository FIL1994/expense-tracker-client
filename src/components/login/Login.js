import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Input, Button, Segment, Form, Header } from "semantic-ui-react";
import "./login.less";
import LabelledInput from "../forms/LabelledInput";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function login() {
    setIsLoading(true);

    try {
      const url = `${process.env.ROOT_URL}/api/users/signin`;

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

      setTimeout(() => props.history.push("/"));
    } catch (e) {
      setMessage(e.message);
    }

    setIsLoading(false);
  }

  return (
    <div className="login">
      <Segment color="blue">
        <Header>{process.env.APP_NAME}</Header>
        <Form>
          <LabelledInput
            label="Email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <LabelledInput
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" primary onClick={login} loading={isLoading}>
            Sign In
          </Button>
        </Form>
        <div className="message">{message}</div>
      </Segment>
    </div>
  );
};

export default withRouter(Login);
