import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const ScFormContolsContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
  }

  #rememberMeCheckbox {
    width: 20px;
  }
`;

const LoginForm = ({ onSubmit, registeredData }) => {
  const [email, setEmail] = useState(registeredData.email || "");
  const [password, setPassword] = useState(registeredData.password || "");
  const [rememberLogin, setRememberLogin] = useState(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    onSubmit(email, password, rememberLogin);
  };

  return (
    <Form onSubmit={handleSubmitLogin}>
      <Form.Group
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          defaultValue={email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          defaultValue={password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <ScFormContolsContainer>
        <Button variant="primary" type="submit" style={{ marginRight: "30px" }}>
          Login
        </Button>
        <div>
          <label htmlFor="rememberMeCheckbox">Remember me</label>
          <input
            onChange={(e) => setRememberLogin(e.target.value)}
            value={rememberLogin}
            id="rememberMeCheckbox"
            type="checkbox"
          ></input>
        </div>
        <Link to="/register">
          <Button variant="link" role="button">
            Register
          </Button>
        </Link>
      </ScFormContolsContainer>
    </Form>
  );
};

export default LoginForm;
