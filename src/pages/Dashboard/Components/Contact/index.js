import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Lottie from "react-lottie";
import { Form } from "@unform/web";
import InputComponent from "Components/Input";
import TextAreaComponent from "Components/TextArea";
import {
  Container,
  Content,
  ContactInfoBx,
  Heading,
  ContactMe,
  Paragraph,
  ContactInfo,
  ContactInfoH3,
  Icon,
  Text,
  Box,
  FormBx,
  AnimationContainer,
} from "./styles";
import "./styles.css";
import animationData from "assets/send-button.json";
const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Contact() {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });
  const toogleAnimation = () => {
    setAnimationState({
      ...animationState,
      isStopped: false,
    });
    setTimeout(() => {
      setAnimationState({
        ...animationState,
        isStopped: true,
      });
    }, 1600);
  };
  return (
    <Container id="contact">
      <Heading className="white">
        <ContactMe className="white">Contato</ContactMe>
        <Paragraph>Entre em contato preenchendo o formulário abaixo</Paragraph>
      </Heading>
      <Content>
        <ContactInfo>
          <ContactInfoH3>Informações de contato</ContactInfoH3>
          <ContactInfoBx>
            <Box>
              <Icon>
                <LocationOnIcon />
              </Icon>
              <Text>
                <ContactInfoH3 style={{ color: "#2196f3" }}>
                  Endereço
                </ContactInfoH3>
              </Text>

              <Paragraph>
                Rua João XXIII, <br /> Lagoa Grande, Minas Gerais, <br /> 165
              </Paragraph>
            </Box>
            <Box>
              <Icon>
                <PhoneIcon />
              </Icon>
              <Text>
                <ContactInfoH3 style={{ color: "#2196f3" }}>
                  Telefone
                </ContactInfoH3>
              </Text>

              <Paragraph>+55 34 9 9706-5494</Paragraph>
            </Box>
            <Box>
              <Icon>
                <MailOutlineIcon />
              </Icon>
              <Text>
                <ContactInfoH3 style={{ color: "#2196f3" }}>
                  Email
                </ContactInfoH3>
              </Text>
              <Paragraph>wylgneremiliano@gmail.com</Paragraph>
            </Box>
          </ContactInfoBx>
        </ContactInfo>
        <FormBx>
          <Form className="formStyled">
            <ContactInfoH3>Me envie</ContactInfoH3>
            <InputComponent
              type="text"
              name="full_name"
              id="standard-basic"
              label="Full Name"
              variant="outlined"
            />
            <InputComponent
              type="email"
              name="email"
              id="standard-basic"
              label="Email"
              variant="outlined"
            />
            <TextAreaComponent
              placeholder="Your message"
              style={{ width: "100%", color: "#fff" }}
              name="message"
            />
            <AnimationContainer onClick={() => toogleAnimation()}>
              <Lottie
                options={defaultOptions}
                height={70}
                width={250}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </AnimationContainer>
          </Form>
        </FormBx>
      </Content>
    </Container>
  );
}
