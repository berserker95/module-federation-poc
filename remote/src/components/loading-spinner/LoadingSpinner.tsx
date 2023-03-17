import * as React from "react";

import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerContent />
    </LoadingSpinnerContainer>
  );
};

const LoadingSpinnerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 350px;
`;
const spinner = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg);}
`
const LoadingSpinnerContent = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Blue */
  border-radius: 50%;
  animation-name: ${spinner};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

export default LoadingSpinner;
