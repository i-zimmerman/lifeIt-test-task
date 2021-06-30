import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/slices/loginSlice";
import { Alert } from "react-bootstrap";

import LoginForm from "../components/LoginForm";
import LoadingSpinner from "../components/LoadingSpinner";

import PageContainer from "../containers/PageContainer";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const registeredData = useSelector((state) => {
    return {
      email: state.register.email,
      password: state.register.password,
    };
  });

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (loginData.token) {
      setShowAlert(true);
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
        history.push("/");
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [loginData.token, history]);

  const handleSubmitLogin = (email, password, rememberLogin) => {
    dispatch(login(email, password, rememberLogin));
  };

  return (
    <PageContainer>
      <h3>Login</h3>

      <LoginForm onSubmit={handleSubmitLogin} registeredData={registeredData} />

      <div style={{ padding: "30px 0px" }}>
        <p>Login mock data </p>
        <p>email: eve.holt@reqres.in</p>
        <p>password: cityslicka</p>
      </div>

      {loginData.isLoading && <LoadingSpinner />}

      {loginData.error && <Alert variant="danger">{loginData.error}</Alert>}

      {showAlert && <Alert variant="success">Successfully logged in!</Alert>}
    </PageContainer>
  );
};

export default LoginPage;
