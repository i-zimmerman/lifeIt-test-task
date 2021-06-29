import React from "react";
import RegisterForm from "../components/RegisterForm";
import AuthForm from "../components/RegisterForm";
import PageContainer from "../containers/PageContainer";

const RegistrationPage = () => {
  return (
    <PageContainer>
      <h3>Register</h3>
      <RegisterForm />
    </PageContainer>
  );
};

export default RegistrationPage;
