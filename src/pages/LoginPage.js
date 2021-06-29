import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

import PageContainer from "../containers/PageContainer";

const LoginPage = () => {
  return (
    <PageContainer>
      <h3>Login</h3>
      <LoginForm />
    </PageContainer>
  );
};

export default LoginPage;
