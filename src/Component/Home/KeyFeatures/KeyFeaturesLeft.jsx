import React from "react";
import styled from "styled-components";

const KeyFeaturesLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const KeyFeaturesLeftTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
  margin-bottom: 20px;

  @media ${(props) => props.theme.device.laptop} {
    font-size: 2.3rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 1.7rem;
  }
`;

const KeyFeaturesLeftSubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  margin-bottom: 20px;
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const KeyFeaturesLeftDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  padding: 15px 10px;
  line-height: 25px;
  width: 80%;
  @media ${(props) => props.theme.device.laptop} {
    width: 70%;
  }
`;

const KeyFeaturesLeft = () => {
  return (
    <KeyFeaturesLeftWrapper>
      <KeyFeaturesLeftTitle>
        Why Choose <span>B</span>aron<span>B</span>oost?
      </KeyFeaturesLeftTitle>
      <KeyFeaturesLeftSubTitle>
        Experience the most fulfilling in-game services.
      </KeyFeaturesLeftSubTitle>
      <KeyFeaturesLeftDescription>
        At BaronBoost, our skilled players, including former pros and top-ranked
        players, will play the games for you, making it quick and easy to reach
        your desired tier. With our wide-ranging expertise, your account will
        stay safe from suspensions, and we promise to offer you the best
        experience at the most affordable prices.
      </KeyFeaturesLeftDescription>
    </KeyFeaturesLeftWrapper>
  );
};

export default KeyFeaturesLeft;
