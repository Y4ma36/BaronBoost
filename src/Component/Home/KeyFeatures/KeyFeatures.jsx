import React from "react";
import styled from "styled-components";
import KeyFeaturesLeft from "./KeyFeaturesLeft";
import KeyFeaturesRight from "./KeyFeaturesRight";

const KeyFeaturesWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 150px 0px;
  @media ${(props) => props.theme.device.laptop} {
    gap: 60px;
    flex-direction: column;
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
