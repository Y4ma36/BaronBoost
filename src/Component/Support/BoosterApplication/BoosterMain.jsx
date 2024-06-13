import React from "react";
import styled from "styled-components";
import BoosterMainLeft from "./BoosterMainLeft";
import BoosterMainRight from "./BoosterMainRight";
import background_img from "../../../assets/Support/Ahri.png";

// https://forms.gle/3VGXkQWhhWnX1NTJA

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  padding: 50px 0px;
  position: relative;
  gap: 50px;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
  }
`;

const BackgroundImg = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  @media ${(props) => props.theme.device.laptop} {
    transform: translate(0%, -90%);
  }
  @media ${(props) => props.theme.device.tablet} {
    transform: translate(-15%, -90%);
  }
  @media ${(props) => props.theme.device.mobile} {
    transform: translate(-50%, -70%);
  }
  img {
    width: 700px;
    @media ${(props) => props.theme.device.mobile} {
      width: 1000px;
    }
  }
`;

const BoosterMain = () => {
  return (
    <Wrapper>
      <BoosterMainLeft />
      <BackgroundImg>
        <img src={background_img} alt="" />
      </BackgroundImg>
      <BoosterMainRight />
    </Wrapper>
  );
};

export default BoosterMain;
