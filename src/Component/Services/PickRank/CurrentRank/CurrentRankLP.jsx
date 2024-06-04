import React from "react";
import styled from "styled-components";
import arrow_down from "../../../../assets/arrowDown.png";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
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
    </Wrapper>
  );
};

export default CurrentRankLP;
