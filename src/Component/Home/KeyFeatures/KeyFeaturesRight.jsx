import React from "react";
import styled from "styled-components";
import backgroundImg from "../../../assets/ahri.jpg";
import keyFeaturesList from "./KeyFeaturesData";

const KeyFeaturesRightWrapper = styled.div`
  flex: 2;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
  }
`;

const KeyFeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px 60px;
  grid-gap: 40px;
  @media ${(props) => props.theme.device.tablet} {
    grid-gap: 80px;
  }
`;

const KeyFeaturesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const KeyFeaturesItemIcon = styled.div`
  svg {
    width: 120px;
    height: 120px;
  }
  svg path {
    stroke: ${(props) => props.theme.colors.purple};
  }
  @media ${(props) => props.theme.device.laptop} {
    svg {
      width: 90px;
      height: 90px;
    }
  }
  @media ${(props) => props.theme.device.tablet} {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

const KeyFeaturesItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const KeyFeaturesItemDescription = styled.p`
  line-height: 20px;
  font-weight: 500;
  width: 70%;
  @media ${(props) => props.theme.device.laptop} {
    width: 50%;
  }
  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
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
