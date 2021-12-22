import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Form } from "@unform/web";
import Swal from "sweetalert2";
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
  ButtonCustom,
} from "./styles";
import "./styles.css";
import dogAnimation from "assets/dogAnimation.gif";

export default function Contact() {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);
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
                <ContactInfoH3 style={{ color: "#d863bb" }}>
                  Endereço
                </ContactInfoH3>
              </Text>

              <Paragraph>
                Lagoa Grande, Minas Gerais <br /> 38755000
              </Paragraph>
            </Box>
            <Box>
              <Icon>
                <PhoneIcon />
              </Icon>
              <Text>
                <ContactInfoH3 style={{ color: "#d863bb" }}>
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
                <ContactInfoH3 style={{ color: "#d863bb" }}>
                  Email
                </ContactInfoH3>
              </Text>
              <Paragraph>wylgneremiliano@gmail.com</Paragraph>
            </Box>
          </ContactInfoBx>
        </ContactInfo>
        <FormBx>
          <Form className="formStyled">
            <InputComponent
              type="text"
              name="full_name"
              id="standard-basic"
              label="Nome completo"
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
              maxLength="500"
              placeholder="Sua mensagem"
              style={{ width: "100%", color: "#fff" }}
              name="message"
            />
            <ButtonCustom
              onClick={() =>
                Swal.fire({
                  width: windowSize < 500 ? "350px" : "500px",
                  confirmButtonColor: "#d863bb",
                  title: "Mensagem recebida!",
                  backdrop: `rgba(0,0,0,0.7)
                  url("https://sweetalert2.github.io/images/nyan-cat.gif")
                  left bottom
                  no-repeat`,
                  text: "Obrigado por entrar em contato, já já te respondo :D ",
                  imageUrl: `${dogAnimation}`,
                  imageWidth: 200,
                  imageHeight: 200,
                  imageAlt: "Custom image",
                })
              }
            >
              Enviar
            </ButtonCustom>
          </Form>
        </FormBx>
      </Content>
    </Container>
  );
}
