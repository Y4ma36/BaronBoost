import React from "react";
import styled from "styled-components";
import OrderHeader from "./OrderHeader";
import OrderList from "./OrderList/OrderList";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const Container = styled.div`
  width: 90%;
  background-color: ${(props) => props.theme.colors.purple};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 10px;
  padding-bottom: 10px;
  border: 2px solid white;
`;

const OrderMain = () => {
  return (
    <Wrapper>
      <Container>
        <OrderHeader />
        <OrderList />
      </Container>
    </Wrapper>
  );
};

export default OrderMain;
