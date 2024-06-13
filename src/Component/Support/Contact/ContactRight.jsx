import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 90%;
  width: 80%;
  gap: 20px;
  @media ${(props) => props.theme.device.laptop} {
    align-items: center;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  button {
    padding: 20px 30px;
    background-color: ${(props) => props.theme.colors.purple};
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: ${(props) => props.theme.fontSize.md};
  }
  @media ${(props) => props.theme.device.mobile} {
    align-items: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.md};
    }
    input {
      margin-top: 10px;
      padding: 15px 5px;
      width: 300px;
      @media ${(props) => props.theme.device.mobile} {
        width: 200px;
      }
    }
  }
`;

const ContactArea = styled.div`
  label {
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.md};
    }
    textarea {
      margin-top: 10px;
      padding: 10px 5px;
      width: 300px;
      height: 200px;
      @media ${(props) => props.theme.device.mobile} {
        width: 200px;
      }
    }
  }
`;

const ContactRight = () => {
  const emailJSConfig = {
    apikey: import.meta.env.VITE_EMAIL_JS_API_KEY,
    templateKey: import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID_KEY,
    serviceKey: import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailJSConfig.serviceKey,
        emailJSConfig.templateKey,
        form.current,
        emailJSConfig.apikey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Wrapper>
      <Container>
        <Title>Send Us a Message</Title>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInfo>
            <label>
              Name
              <input type="text" name="user_name" required></input>
            </label>
            <label required>
              Email
              <input type="email" name="user_email" />
            </label>
          </ContactInfo>
          <ContactArea>
            <label>
              Message
              <textarea name="message" required />
            </label>
          </ContactArea>
          <button type="submit">SUBMIT</button>
        </ContactForm>
      </Container>
    </Wrapper>
  );
};

export default ContactRight;
