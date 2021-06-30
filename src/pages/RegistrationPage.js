import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/slices/registerSlice";

import RegisterForm from "../components/RegisterForm";
import PageContainer from "../containers/PageContainer";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const RegistrationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.register);
  const handleSubmitRegistration = (email, password) => {
    dispatch(register(email, password));
  };

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (registrationData.id) {
      setShowAlert(true);
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
        history.push("/login");
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [registrationData.id, history]);

  return (
    <PageContainer>
      <h3>Register</h3>
      <RegisterForm onSubmit={handleSubmitRegistration} />
      <div style={{ padding: "30px 0px" }}>
        <p>Register mock data </p>
        <p>email: eve.holt@reqres.in</p>
        <p>password: pistol</p>
      </div>

      {registrationData.error && (
        <Alert variant="danger">{registrationData.error}</Alert>
      )}

      {showAlert && (
        <Alert variant="success">You have been successfully registered!</Alert>
      )}

      {registrationData.isLoading && <LoadingSpinner />}
    </PageContainer>
  );
};

export default RegistrationPage;
