import React, { useState } from "react";
import styled from "styled-components";
import flash_Img from "../../../../../../assets/Role/flash.webp";
import { useSetRecoilState } from "recoil";
import { chooseSpell } from "../../../../../../Data/atomsOrder";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 10px;
`;

const SpellContainer = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SpellBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background: ${(props) =>
    props.isSelected ? "rgb(140, 122, 230,0.6)" : "rgba(255, 255, 255, 0.1)"};
  cursor: pointer;
  transition: transform 0.3s ease;
  h1 {
    font-size: 2rem;
  }
  img {
    width: 60px;
    height: 60px;
  }
  &:hover {
    transform: translateY(-8px);
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.purple : "rgb(255, 255, 255, 0.3)"};
  }
`;

const LeagueSpell = () => {
  const [spellClick, setSpellClick] = useState(false);
  const [spellClick2, setSpellClick2] = useState(false);
  const setSpell = useSetRecoilState(chooseSpell);

  const handleClick = (value) => {
    if (value === "D") {
      setSpellClick(true);
      setSpellClick2(false);
      setSpell(value);
    } else {
      setSpellClick(false);
      setSpellClick2(true);
      setSpell(value);
    }
  };

  return (
    <Wrapper>
      <Title>Spell</Title>
      <SpellContainer>
        <SpellBox onClick={() => handleClick("D")} isSelected={spellClick}>
          <img src={flash_Img} />
          <h1>D</h1>
        </SpellBox>
        <SpellBox onClick={() => handleClick("F")} isSelected={spellClick2}>
          <img src={flash_Img} />
          <h1>F</h1>
        </SpellBox>
      </SpellContainer>
    </Wrapper>
  );
};

export default LeagueSpell;
