import React from "react";
import styled from "styled-components";
import supportData from "./\bSupportData";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Wrapper = styled.div`
  background-color: #7f8fa6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 100px 0px;
  @media ${(props) => props.theme.device.laptop} {
    padding: 50px 20px;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding: 0px 20px;

  a {
    text-decoration: none;
    color: inherit;
  }
  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;

const SupportBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 2px solid rgba(233, 234, 239, 0.5);
  border-radius: 7px;
  padding: 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  img {
  }
  @media ${(props) => props.theme.device.laptop} {
    padding: 10px 10px;
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const SupportTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
  color: ${(props) => props.theme.colors.black};
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const SupportDescription = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  opacity: 0.7;
`;

const SupportMain = () => {
  return (
    <Wrapper>
      <Container>
        {supportData.map((item, index) => (
          <Link to={item.link}>
            <SupportBox key={index}>
              <img src={item.icon}></img>
              <SupportTitle>{item.name}</SupportTitle>
              <SupportDescription>{item.description}</SupportDescription>
            </SupportBox>
          </Link>
        ))}
      </Container>
    </Wrapper>
  );
};

export default SupportMain;
