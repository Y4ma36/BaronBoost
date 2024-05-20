import React from "react";
import styled from "styled-components";
import servicesList from "./ServicesList";

const ServicesWrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;
const ServicesTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
`;

const ServicesItemContainer = styled.div`
  padding: 50px 70px;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const ServicesItem = styled.div`
  text-align: center;
  background: ${(props) => props.theme.colors.black};
  padding: 30px 10px;
  border-radius: 10px;
`;

const SerVicesImg = styled.div`
  svg {
    width: 120px;
    height: 120px;
  }
  svg path {
    stroke: ${(props) => props.theme.colors.purple};
  }
`;

const SerVicesItemTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-top: 10px;
  font-weight: 700;
`;

const ServicesItemDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  margin-top: 13px;
  line-height: 30px;
  font-weight: 500;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesTitle>What We Offer</ServicesTitle>
      <ServicesItemContainer>
        <ServicesList>
          {servicesList.map((item) => (
            <ServicesItem key={item.id}>
              <SerVicesImg>{item.Icon()}</SerVicesImg>
              <SerVicesItemTitle>{item.name}</SerVicesItemTitle>
              <ServicesItemDescription>
                {item.description}
              </ServicesItemDescription>
            </ServicesItem>
          ))}
        </ServicesList>
      </ServicesItemContainer>
    </ServicesWrapper>
  );
};

export default Services;
