import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateLogin } from "../utils";

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const vErrors = validateLogin(email, password);

    if (Object.keys(vErrors).length) {
      setErrors(vErrors);
      return;
    }

    onSubmit(email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
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
          isInvalid={!!errors.password}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginRight: "30px" }}>
        Register
      </Button>

      <Button variant="link" href="/login" role="button">
        Go back to login page
      </Button>
    </Form>
  );
};

export default RegisterForm;
