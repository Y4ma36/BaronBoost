import React from "react";
import styled from "styled-components";
import supportData from "./\bSupportData";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Wrapper = styled.div`
  background-color: #7f8fa6;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const SupportBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 100%;
  border: 2px solid rgba(233, 234, 239, 0.5);
  border-radius: 7px;
  padding: 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  img {
  }
`;

const SupportTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
  color: ${(props) => props.theme.colors.black};
  margin-top: 10px;
  margin-bottom: 10px;
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
