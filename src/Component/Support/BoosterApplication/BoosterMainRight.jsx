import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoosterMainRight = () => {
  return <Wrapper>BoosterMainRight</Wrapper>;
};

export default BoosterMainRight;
