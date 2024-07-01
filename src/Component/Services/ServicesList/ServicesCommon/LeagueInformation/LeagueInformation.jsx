import React from "react";
import styled from "styled-components";

import LeagueAccount from "./LeagueAccount/LeagueAccount";
import LeagueAccountQuestion from "./LeagueAccount/LeagueAccountQuestion";
import LeagueRole from "./LeagueRole/LeagueRole";
import LeagueChamps from "./LeagueChamps/LeagueChamps";
import LeagueSpell from "./LeagueSpell/LeagueSpell";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  background-color: #011638;
  padding: 10px 10px;
  min-height: 180px;
  border: 5px solid white;
  border-radius: 5px;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  position: relative;
  padding: 20px;
  @media ${(props) => props.theme.device.tablet} {
    padding: 20px 0px;
  }
`;

const LeagueInfo = styled.div``;

const LeagueInformation = () => {
  return (
    <Wrapper>
      <Container>
        <LeagueAccount />
        <LeagueAccountQuestion />
      </Container>
      <Container>
        <LeagueRole />
      </Container>
      <Container>
        <LeagueChamps />
        <LeagueSpell />
      </Container>
    </Wrapper>
  );
};

export default LeagueInformation;
