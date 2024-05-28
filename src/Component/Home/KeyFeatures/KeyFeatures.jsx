import React from "react";
import styled from "styled-components";
import KeyFeaturesLeft from "./KeyFeaturesLeft";
import KeyFeaturesRight from "./KeyFeaturesRight";

const KeyFeaturesWrapper = styled.div`
  display: flex;
  height: 90vh;
  background-color: black;
  padding: 50px 0px;

  @media ${(props) => props.theme.device.laptop} {
    padding-top: 150px;
    gap: 60px;
    height: 150vh;
    flex-direction: column;
  }
  @media ${(props) => props.theme.device.tablet} {
    height: 130vh;
  }
`;

// 가격이싸다 24/7 support appear offlinemode 신속함
const KeyFeatures = () => {
  return (
    <KeyFeaturesWrapper>
      <KeyFeaturesLeft />
      <KeyFeaturesRight />
    </KeyFeaturesWrapper>
  );
};

export default KeyFeatures;
