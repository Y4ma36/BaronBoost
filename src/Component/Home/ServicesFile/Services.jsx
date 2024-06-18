import React from "react";
import styled from "styled-components";
import servicesList from "./ServicesData";
import { color, delay, easeIn, motion } from "framer-motion";

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  padding: 60px 0px;
`;
const ServicesTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  @media ${(props) => props.theme.device.laptop} {
    font-size: 2.5rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 2rem;
  }
`;

const ServicesItemContainer = styled.div`
  padding: 50px 50px;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media ${(props) => props.theme.device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  @media ${(props) => props.theme.device.mobile} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
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
  @media ${(props) => props.theme.device.laptop} {
    width: 100%;
  }
`;

const ServicesImg = styled(motion.div)`
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
`;

const SerVicesItemTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-top: 10px;
  font-weight: 700;
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const ServicesItemDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  margin-top: 13px;
  line-height: 30px;
  font-weight: 500;
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const ItemVariant = {
  hover: {
    y: -13,
    borderColor: "#8c7ae6",
    transition: {
      duration: 1,
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
              transition={{ duration: 0.5 }}
            >
              <ServicesImg>{item.Icon()}</ServicesImg>
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
