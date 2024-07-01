import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import useAllPriceData from "../../AllPriceData";
import { useRecoilState, useSetRecoilState } from "recoil";
import { priceState } from "../../../../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-left: 10px;
  font-weight: 700;
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const Container = styled.div`
  margin-right: 10px;
  display: flex;
`;

const PriceContainer = styled.div`
  display: flex;
  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column-reverse;
  }
`;

const TotalPrice = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-family: "Noto Sans KR", sans-serif;
  margin-right: 5px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const OldPrice = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: black;
  text-decoration: line-through;
  opacity: 0.3;
  font-family: "Noto Sans KR", sans-serif;
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const Sale = styled.div`
  background-color: red;
  padding: 3px 3px;
  margin-right: 5px;
  border-radius: 3px;
  font-size: ${(props) => props.theme.fontSize.md};
  display: flex;
  align-items: center;
  h3 {
    font-weight: 600;
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const Price = () => {
  /*---------------------[Price Data]------------------------*/

  const {
    totalSoloPrice,
    totalDuoPrice,
    soloError,
    duoError,
    totalNetWinsPrice,
    netwinsError,
    oldTotalSoloPrice,
    oldTotalDuoPrice,
    oldTotalNetWinsPrice,
  } = useAllPriceData();
  const currentLocation = useLocation().pathname.split("/").pop();

  /*-------------------------------------------------------*/

  /*---------------------[Check out Price]------------------------*/

  const setPrice = useSetRecoilState(priceState);

  useEffect(() => {
    if (currentLocation === "solo") {
      setPrice(totalSoloPrice);
    } else if (currentLocation === "duo") {
      setPrice(totalDuoPrice);
    } else if (currentLocation === "netwins") {
      setPrice(totalNetWinsPrice);
    }
  }, [totalSoloPrice, totalDuoPrice, totalNetWinsPrice, currentLocation]);

  /*-------------------------------------------------------*/

  return (
    <Wrapper>
      <Title>Total Price: </Title>
      <Container>
        <Sale>
          <h3>30%</h3>
        </Sale>
        <PriceContainer>
          <TotalPrice>
            $
            {currentLocation === "solo"
              ? totalSoloPrice
              : currentLocation === "duo"
              ? totalDuoPrice
              : totalNetWinsPrice}
          </TotalPrice>
          <OldPrice>
            $
            {currentLocation === "solo"
              ? oldTotalSoloPrice
              : currentLocation === "duo"
              ? oldTotalDuoPrice
              : oldTotalNetWinsPrice}
          </OldPrice>
        </PriceContainer>
      </Container>
    </Wrapper>
  );
};

export default Price;
