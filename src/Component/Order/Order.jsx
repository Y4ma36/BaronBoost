import React from "react";
import styled from "styled-components";
import OrderHero from "./OrderHero";
import OrderMain from "./OrderMain/OrderMain";

const Wrapper = styled.div``;

const Order = () => {
  return (
    <Wrapper>
      <OrderHero />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;
