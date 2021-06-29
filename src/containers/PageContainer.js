import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const ScPageContainer = styled(Container)`
  max-width: 75%;
  margin-top: 10%;

  & input {
    width: 400px;
  }
`;

const PageContainer = ({ children, ...props }) => {
  return <ScPageContainer>{children}</ScPageContainer>;
};

export default PageContainer;
