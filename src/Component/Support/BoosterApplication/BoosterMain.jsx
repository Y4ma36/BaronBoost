import React from "react";
import styled from "styled-components";
import BoosterMainLeft from "./BoosterMainLeft";
import BoosterMainRight from "./BoosterMainRight";

// https://forms.gle/3VGXkQWhhWnX1NTJA

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  padding: 70px 0px;
  gap: 50px;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
  }
`;

const BoosterMain = () => {
  return (
    <Wrapper>
      <BoosterMainLeft />
      <BoosterMainRight />
    </Wrapper>
  );
};

export default BoosterMain;
