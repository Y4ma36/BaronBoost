import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/orderHero.jpg";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 20%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.device.laptop} {
    background-position: center;
  }
`;

const Order = () => {
  return <Wrapper>Order</Wrapper>;
};

export default Order;
