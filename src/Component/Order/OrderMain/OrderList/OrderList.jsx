import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  margin: 0px 40px;
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
