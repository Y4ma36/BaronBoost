import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { leagueChampionList } from "./LeagueChampionList";
import blank_Img from "../../../../../../assets/Role/noProfile.jpeg";

const Wrapper = styled.div`
  display: ${(props) => (props.isChampSelectOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 80%;
  background-color: black;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    background-color: ${(props) => props.theme.colors.purple};
    padding: 15px 0px;
    width: 200px;
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    border: none;
    transition: all 0.2s ease-in-out;
    overflow-y: scroll;
    &:hover {
      background-color: white;
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

const ChampItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChampItem = styled.div`
  border: ${(props) => (props.isSelected ? "3px solid white" : "none")};
  cursor: pointer;
  img {
    width: 80px;
    height: 80px;
  }
`;

const LeagueChampSelect = ({
  isChampSelectOpen,
  handleClose,
  handleChampAdd,
}) => {
  const [champSelect, setChampSelect] = useState(false);

  useEffect(() => {
    if (isChampSelectOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isChampSelectOpen]);

  const handleClick = () => {
    if (champSelect) {
      handleChampAdd(champSelect);
    }
    handleClose();
  };

  const champData = Object.values(leagueChampionList.map((item) => item.data));

  const champInformation = Object.values(champData[0]);

  const handleChampClick = (name) => {
    setChampSelect(name);
  };

  return (
    <Wrapper isChampSelectOpen={isChampSelectOpen}>
      <Container>
        <Title>Champion Select</Title>
        <ChampItems>
          {champInformation.map((item, index) => (
            <ChampItem
              key={index}
              isSelected={champSelect === item.id}
              onClick={() => handleChampClick(item.id)}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${item.id}.png`}
                onError={(e) => (e.target.src = blank_Img)}
              />
            </ChampItem>
          ))}
        </ChampItems>
        <button onClick={handleClick}>Select</button>
      </Container>
    </Wrapper>
  );
};

export default LeagueChampSelect;
