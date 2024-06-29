import React from "react";
import styled from "styled-components";
import logo_Img from "../../assets/BaronBoostLogo.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-family: "Noto Sans KR", sans-serif;
    color: ${(props) => props.theme.colors.white};
  }
`;

const BaronBoostLogo = styled.div`
  img {
    width: 170px;
    height: 150px;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <Container>
        <BaronBoostLogo>
          <img src={logo_Img} alt="" />
        </BaronBoostLogo>
        <span>Loading...</span>
      </Container>
    </Wrapper>
  );
};

export default Loading;
