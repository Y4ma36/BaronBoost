import React from "react";
import styled from "styled-components";
import hero_Bg from "../../../assets/Support/faqs.jpg";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${hero_Bg});
  background-position: 10% 30%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Faqs = () => {
  return <Wrapper>Faqs</Wrapper>;
};

export default Faqs;
