import React from "react";
import styled from "styled-components";
import KeyFeaturesLeft from "./KeyFeaturesLeft";
import KeyFeaturesRight from "./KeyFeaturesRight";

const KeyFeaturesWrapper = styled.div`
  display: flex;
  height: 80vh;
  background-color: black;
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
