import React from "react";
import styled from "styled-components";
import arrow_down from "../../../../../../assets/arrowDown.png";
import { useLocation } from "react-router-dom";

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
  return (
    <Wrapper>
      <CurrentLpContainer>
        <CurrentLpForm>
          <label>Current LP</label>
          <select name="currentLP" className="arrow">
            <option value="0-20">0-20</option>
            <option value="21-40">21-40</option>
            <option value="41-60">41-60</option>
            <option value="61-80">61-80</option>
            <option value="81-100">81-100</option>
          </select>
        </CurrentLpForm>
      </CurrentLpContainer>
      <CurrentLpContainer>
        <CurrentLpForm>
          <label>Lp Gain</label>
          <select name="lpgain" className="arrow">
            <option value="NA"></option>
            <option value="EUW">EUW</option>
          </select>
        </CurrentLpForm>
      </CurrentLpContainer>
      {/* Net Wins Choice */}
      {currentLocation === "netwins" ? (
        <CurrentLpContainer>
          <CurrentLpForm>
            <label>Net Wins</label>
            <select name="lpgain" className="arrow">
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
