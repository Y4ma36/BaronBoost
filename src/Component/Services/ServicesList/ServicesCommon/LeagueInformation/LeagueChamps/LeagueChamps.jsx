import React, { useState } from "react";
import styled from "styled-components";
import LeagueChampSelect from "./LeagueChampSelect";

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`;

const Title = styled.h1``;

const ChampContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ChampBox = styled.div`
  background: ${(props) =>
    props.isSelected ? "rgb(140, 122, 230,0.6)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 3px;
  padding: 5px 8px;
  width: 100px;
  height: 100px;
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

const LeagueChamps = () => {
  const [selectedChamp, setSelectedChamp] = useState([]);
  const [isChampSelectOpen, setIsChampSelectOpen] = useState(false);
  const handleChampSelect = () => {
    setIsChampSelectOpen((prev) => !prev);
  };

  const handleChampAdd = (champion) => {
    setSelectedChamp((prev) => [...prev, champion]);
  };

  const handleClose = () => {
    setIsChampSelectOpen(false);
  };

  console.log(selectedChamp);
  return (
    <Wrapper>
      <Title>Choose your Champions</Title>
      <ChampContainer>
        <ChampBox onClick={handleChampSelect}></ChampBox>
        <ChampBox onClick={handleChampSelect}></ChampBox>
        <ChampBox onClick={handleChampSelect}></ChampBox>
      </ChampContainer>
      <LeagueChampSelect
        isChampSelectOpen={isChampSelectOpen}
        handleChampAdd={handleChampAdd}
        handleClose={handleClose}
      />
    </Wrapper>
  );
};

export default LeagueChamps;
