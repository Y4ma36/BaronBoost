import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 0px 10px;
`;

const Cotainer = styled.div`
  width: 100%;
  label {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
  }
  input {
    width: 80%;
    padding: 8px 5px;
    border: none;
    border-radius: 3px;
  }
`;
const LeagueAccount = () => {
  return (
    <Wrapper>
      <Cotainer>
        <label htmlFor="user-name">Riot ID: </label>
        <input type="text" id="user-name" placeholder="Enter your Riot ID" />
      </Cotainer>
      <Cotainer>
        <label htmlFor="password">Riot Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Riot password"
        />
      </Cotainer>
    </Wrapper>
  );
};

export default LeagueAccount;
