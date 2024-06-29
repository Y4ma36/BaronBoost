import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
  border: 2px solid white;
`;

const Container = styled.div`
  padding: 10px;
`;

const TotalPriceTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`;

const DicountCodeContainer = styled.div`
  padding: 10px;
`;

const DiscountCode = styled.label`
  width: 100%;
  margin-top: 10px;
  position: relative;
  display: flex;
  input {
    width: 100%;
    padding: 10px 10px;

    border-radius: 5px;
    border: none;
  }
  button {
    position: absolute;
    top: 8px;
    right: 5px;
    border: none;
    background: inherit;
    @media ${(props) => props.theme.device.mobile} {
      display: none;
    }
  }
`;

const DiscountButton = styled.button`
  display: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 5px 10px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: black;
    color: ${(props) => props.theme.colors.white};
  }
  @media ${(props) => props.theme.device.mobile} {
    display: flex;
    justify-content: center;
  }
`;

const TotalPriceTop = () => {
  return (
    <Wrapper>
      <Container>
        <TotalPriceTitle>Checkout</TotalPriceTitle>
        <DicountCodeContainer>
          <h1>Apply Discount Code</h1>
          <DiscountCode>
            <input type="text" placeholder="Enter Discount Code" />
            <button>Apply Discount</button>
          </DiscountCode>
          <DiscountButton>Apply Discount</DiscountButton>
        </DicountCodeContainer>
      </Container>
    </Wrapper>
  );
};

export default TotalPriceTop;
