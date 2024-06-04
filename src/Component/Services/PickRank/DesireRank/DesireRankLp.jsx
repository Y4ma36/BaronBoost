import React from "react";
import styled from "styled-components";
import arrow_down from "../../../../assets/arrowDown.png";

const Wrapper = styled.div``;

const DesireLpContainer = styled.div``;

const DesireLpForm = styled.div`
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

const DesireRankLp = () => {
  return (
    <Wrapper>
      <DesireLpContainer>
        <DesireLpForm>
          <label>Server</label>
          <select name="server" className="arrow">
            <option value="NA">NA</option>
            <option value="EUW">EUW</option>
          </select>
        </DesireLpForm>
      </DesireLpContainer>
    </Wrapper>
  );
};

export default DesireRankLp;
