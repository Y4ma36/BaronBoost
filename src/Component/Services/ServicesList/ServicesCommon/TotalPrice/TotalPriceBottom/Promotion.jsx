import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0px;
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    font-family: "Noto Sans KR", sans-serif;
    color: ${(props) => props.theme.colors.black};
    padding: 10px;
  }
`;

const FreeBox = styled.div`
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.purple};
  h3 {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    font-family: "Noto Sans KR", sans-serif;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.8;
  }
`;

const Promotion = () => {
  return (
    <Wrapper>
      <h1>Choose your Roles and Champions</h1>
      <FreeBox>
        <h3>Free</h3>
      </FreeBox>
    </Wrapper>
  );
};

export default Promotion;
