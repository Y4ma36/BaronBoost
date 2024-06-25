import React from "react";
import styled from "styled-components";
import arrow_down from "../../../../../../assets/arrowDown.png";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  setCurrentLp,
  setLpGain,
  setNetWins,
} from "../../../../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
  }
`;

const CurrentLpContainer = styled.div``;

const CurrentLpForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 700;
    margin-bottom: 7px;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 170px;
    padding: 10px 15px 10px 10px;
    background-color: inherit;
    border: 2px solid white;
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    background: url(${arrow_down}) no-repeat right center;
    background-size: 30px;
  }

  select::-ms-expand {
    display: none;
  }
`;

const CurrentRankLP = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();
  const setCurrentRankLp = useSetRecoilState(setCurrentLp);
  const setLpRankGain = useSetRecoilState(setLpGain);
  const setNetWinsGame = useSetRecoilState(setNetWins);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const convertValue = Number(value);
    if (name === "currentLP") {
      setCurrentRankLp(convertValue);
    } else if (name === "lpgain") {
      setLpRankGain(convertValue);
    } else if (name === "netwins") {
      setNetWinsGame(convertValue);
    }
  };

  return (
    <Wrapper>
      <CurrentLpContainer>
        <CurrentLpForm>
          <label>Current LP</label>
          <select name="currentLP" className="arrow" onChange={handleChange}>
            <option value="20">0-49</option>
            <option value="60">50-99</option>
          </select>
        </CurrentLpForm>
      </CurrentLpContainer>
      <CurrentLpContainer>
        <CurrentLpForm>
          <label>Lp Gain</label>
          <select name="lpgain" className="arrow" onChange={handleChange}>
            <option value="5">0~14</option>
            <option value="16">15~17</option>
            <option value="20">18 or More</option>
          </select>
        </CurrentLpForm>
      </CurrentLpContainer>
      {/* Net Wins Choice */}
      {currentLocation === "netwins" ? (
        <CurrentLpContainer>
          <CurrentLpForm>
            <label>Net Wins</label>
            <select name="netwins" className="arrow" onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </CurrentLpForm>
        </CurrentLpContainer>
      ) : null}
    </Wrapper>
  );
};

export default CurrentRankLP;
