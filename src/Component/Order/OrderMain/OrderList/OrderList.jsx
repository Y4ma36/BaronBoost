import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 95%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`;

const OrderList = () => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default OrderList;
