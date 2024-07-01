import React, { useState } from "react";
import styled from "styled-components";
import LeagueChampSelect from "./LeagueChampSelect";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chooseChampion } from "../../../../../../Data/atomsOrder";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 7px;
`;

const ChampContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const ChampBox = styled.div`
  background: ${(props) =>
    props.isSelected ? "rgb(140, 122, 230,0.6)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 3px;
  padding: 5px 8px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.3s ease;
  img {
    width: 60px;
    height: 60px;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.sm};
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
  const [currentBoxIndex, setCurrentBoxIndex] = useState(null);
  const setChoosedChamp = useSetRecoilState(chooseChampion);

  const handleChampSelect = (index) => {
    setCurrentBoxIndex(index);
    setIsChampSelectOpen(true);
  };

  const handleChampAdd = (champion) => {
    setSelectedChamp((prev) => {
      const newSelectedChamp = [...prev];
      newSelectedChamp[currentBoxIndex] = champion;
      return newSelectedChamp;
    });

    setIsChampSelectOpen(false);
  };

  const handleClose = () => {
    setIsChampSelectOpen(false);
  };

  setChoosedChamp(selectedChamp);
  return (
    <Wrapper>
      <Title>Choose your Champions</Title>
      <ChampContainer>
        {[0, 1, 2].map((index) => (
          <ChampBox key={index} onClick={() => handleChampSelect(index)}>
            {selectedChamp[index] ? (
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${selectedChamp[index]}.png`}
              />
            ) : (
              <h1>Select Champion</h1>
            )}
          </ChampBox>
        ))}
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
