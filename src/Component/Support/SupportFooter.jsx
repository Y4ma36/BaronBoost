import React from "react";
import styled from "styled-components";
import Footer_Img from "../../assets/Support/supportFooter.jpg";
import { FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background: url(${Footer_Img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div`
  background-color: rgba(140, 122, 230, 0.7);
  padding-left: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 15px 20px;
  border-radius: 5px;
  width: 600px;
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 5px;
    text-align: left;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: black;
    text-align: right;
  }
  @media ${(props) => props.theme.device.laptop} {
    width: 450px;
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 80%;
    h1 {
      font-size: ${(props) => props.theme.fontSize.lg};
    }
    h3 {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 90%;
  }
`;

const LinkButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: "Noto Sans KR", sans-serif;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  background-color: rgba(140, 122, 230);
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  .icon {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.device.laptop} {
    padding: 20px 20px;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const SupportFooter = () => {
  return (
    <Wrapper>
      <Container>
        <FooterLeft>
          <h1>Something else?</h1>
          <h3>Chat with us or send us email</h3>
        </FooterLeft>
        <FooterRight>
          <Link to="https://discord.gg/ptY5rxBxnP">
            <LinkButton whileHover={{ y: -10 }}>
              <IconBox>
                <FaDiscord className="icon" />
              </IconBox>
              Chat With Us
            </LinkButton>
          </Link>
          <Link to="/support/contact">
            <LinkButton whileHover={{ y: -10 }}>
              <IconBox>
                <MdEmail className="icon" />
              </IconBox>
              Send Us An Email
            </LinkButton>
          </Link>
        </FooterRight>
      </Container>
    </Wrapper>
  );
};

export default SupportFooter;
