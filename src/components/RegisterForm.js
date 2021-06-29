import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Form.Group
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginRight: "30px" }}>
        Register
      </Button>

      <a className="btn btn-secondary" href="/login" role="button">
        Go back to login page
      </a>
    </Form>
  );
};

export default RegisterForm;
