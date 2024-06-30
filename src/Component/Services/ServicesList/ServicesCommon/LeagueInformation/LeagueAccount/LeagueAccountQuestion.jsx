import React, { useState } from "react";
import styled from "styled-components";
import { FaCircleQuestion } from "react-icons/fa6";

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  .icon {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.lg};
    cursor: pointer;
  }
`;
const Ballon = styled.div`
  display: ${(props) => (props.isMouse ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  width: 80%;
  height: 80%;
  left: 3px;
  top: 20px;
  background: #484848;
  color: white;
  border-radius: 5px;
  padding: 5px 8px;
  gap: 5px;
  &::after {
    border-top: 10px solid #484848;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 0;

    right: -10px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  width: 60%;
`;

const Description = styled.p``;

const LeagueAccountQuestion = () => {
  const [mouse, setMouse] = useState(false);

  const hanldeMouseEnter = () => {
    setMouse(true);
  };

  const handleMouseLeave = () => {
    setMouse(false);
  };
  return (
    <>
      <Wrapper>
        <FaCircleQuestion
          className="icon"
          onMouseEnter={hanldeMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Wrapper>
      <Ballon isMouse={mouse}>
        <Title>Why do we need your Riot ID and password?</Title>
        <Description>
          We require your ID and password to provide faster and more secure
          results for our customers. We ensure that your account information is
          stored 100% securely and follow a policy of purging all information
          during the PURGE event.
        </Description>
      </Ballon>
    </>
  );
};

export default LeagueAccountQuestion;
