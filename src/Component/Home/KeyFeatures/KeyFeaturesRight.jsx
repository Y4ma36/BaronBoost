import React from "react";
import styled from "styled-components";
import backgroundImg from "../../../assets/ahri.jpg";
import keyFeaturesList from "./KeyFeaturesData";

const KeyFeaturesRightWrapper = styled.div`
  flex: 2;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeyFeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-gap: 40px;
`;

const KeyFeaturesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KeyFeaturesItemIcon = styled.div`
  svg {
    width: 120px;
    height: 120px;
  }
  svg path {
    stroke: ${(props) => props.theme.colors.purple};
  }
`;

const KeyFeaturesItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

const KeyFeaturesItemDescription = styled.p`
  line-height: 20px;
  font-weight: 500;
`;

const KeyFeaturesRight = () => {
  return (
    <KeyFeaturesRightWrapper>
      <KeyFeaturesList>
        {keyFeaturesList.map((item, index) => (
          <KeyFeaturesItem key={item.id}>
            <KeyFeaturesItemIcon>{item.Icon()}</KeyFeaturesItemIcon>
            <KeyFeaturesItemTitle>{item.title}</KeyFeaturesItemTitle>
            <KeyFeaturesItemDescription>
              {item.description}
            </KeyFeaturesItemDescription>
          </KeyFeaturesItem>
        ))}
      </KeyFeaturesList>
    </KeyFeaturesRightWrapper>
  );
};

export default KeyFeaturesRight;
