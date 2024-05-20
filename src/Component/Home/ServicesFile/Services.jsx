import React from "react";
import styled from "styled-components";
import servicesList from "./ServicesList";
import { delay, motion } from "framer-motion";

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
  padding: 50px 50px;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const ServicesItem = styled(motion.div)`
  text-align: center;
  background: ${(props) => props.theme.colors.black};
  width: 20%;
  padding: 50px 10px;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  font-size: ${(props) => props.theme.fontSize.base};
  margin-top: 13px;
  line-height: 30px;
  font-weight: 500;
`;

const ItemVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesTitle>What We Offer</ServicesTitle>
      <ServicesItemContainer>
        <ServicesList>
          {servicesList.map((item) => (
            <ServicesItem
              key={item.id}
              variants={ItemVariant}
              whileHover="hover"
            >
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
