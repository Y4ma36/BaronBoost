import React from "react";
import styled from "styled-components";
import OverViewBackgroundImg from "../../../assets/overviewImg.jpg";

const OverViewWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${OverViewBackgroundImg});

  /* 밑에 부분을 더 검하게 줘서 다음 색션과 자연스럽게 이어지도록  */
  background-size: cover;
  background-repeat: no-repeat;

  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverView = () => {
  return <OverViewWrapper></OverViewWrapper>;
};

export default OverView;
