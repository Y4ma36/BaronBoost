import React, { useState } from "react";
import styled from "styled-components";
import leagueRoleData from "./LeagueRoleData";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Container = styled.div``;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 7px;
`;

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoleBox = styled.div`
  background: ${(props) =>
    props.isSelected ? "rgb(140, 122, 230,0.6)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  img {
    width: 40px;
    height: 40px;
  }
  &:hover {
    transform: translateY(-8px);
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.purple : "rgb(255, 255, 255, 0.3)"};
  }
`;

const LeagueRole = () => {
  const [mainSelected, setMainSelected] = useState(null);
  const [secondarySelected, setSecondarySelected] = useState(null);

  const handleMainSelected = (index) => {
    setMainSelected(index);
  };

  const handleSecondarySelected = (index) => {
    setSecondarySelected(index);
  };
  return (
    <Wrapper>
      <Container>
        <Title>Main Role</Title>
        <RoleContainer>
          {leagueRoleData.map((item, index) => (
            <RoleBox
              isSelected={index === mainSelected}
              onClick={() => handleMainSelected(index)}
            >
              <img src={item.icon} alt="" />
            </RoleBox>
          ))}
        </RoleContainer>
      </Container>
      <Container>
        <Title>Secondary Role</Title>
        <RoleContainer>
          {leagueRoleData.map((item, index) => (
            <RoleBox
              isSelected={index === secondarySelected}
              onClick={() => handleSecondarySelected(index)}
            >
              <img src={item.icon} alt="" />
            </RoleBox>
          ))}
        </RoleContainer>
      </Container>
    </Wrapper>
  );
};

export default LeagueRole;
