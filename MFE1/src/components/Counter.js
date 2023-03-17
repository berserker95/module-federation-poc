import * as React from "react";

import styled from "styled-components";

const Counter = () => {
  return (
    <BoxContainer className="border p-3 border-solid border-gray-300 bg-white">
      <h3 className="font-bold text-lg">MFE1</h3>
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  width: 400px;
  height: 400px;
`;
export default Counter;
