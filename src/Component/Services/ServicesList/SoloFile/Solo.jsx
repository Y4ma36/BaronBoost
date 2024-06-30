import React from "react";
import styled from "styled-components";
import SoloPickRank from "../SoloFile/SoloPickRank";
import TotalPrice from "../ServicesCommon/TotalPrice/TotalPrice";
import LeagueInformation from "../ServicesCommon/LeagueInformation/LeagueInformation";

const Wrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 50px 40px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 700px;
  @media ${(props) => props.theme.device.desktop} {
    flex-direction: column;
  }
`;

const OrderMenu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Solo = () => {
  return (
    <Wrapper>
      <OrderMenu>
        <SoloPickRank />
        <LeagueInformation />
      </OrderMenu>
      <TotalPrice />
    </Wrapper>
  );
};

export default Solo;
