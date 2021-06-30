import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const ScSpinnerContainer = styled.div`
  position: sticky !important;
  display: flex;
  justify-content: center;
  width: 200px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 100;
  top: 50%;
`;

const LoadingSpinner = () => (
  <ScSpinnerContainer>
    <Spinner animation="grow" />
    <Spinner animation="grow" />
    <Spinner animation="grow" />
  </ScSpinnerContainer>
);

export default LoadingSpinner;
