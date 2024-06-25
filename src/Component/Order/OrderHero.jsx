import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/orderHero.jpg";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 20%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  @media ${(props) => props.theme.device.laptop} {
    background-position: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-align: center;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const OrderHero = () => {
  return (
    <Wrapper>
      <Title>Order</Title>
    </Wrapper>
  );
};

export default OrderHero;
