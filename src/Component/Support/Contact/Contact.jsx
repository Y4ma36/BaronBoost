import React from "react";
import styled from "styled-components";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Wrapper = styled.div`
  padding-top: 130px;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 70px 0px;
  gap: 50px;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <ContactLeft />
        <ContactRight />
      </Container>
    </Wrapper>
  );
};

export default Contact;
