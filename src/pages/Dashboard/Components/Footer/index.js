import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import {
  Container,
  SocialIcons,
  SocialIconsLi,
  Redirect,
  Row,
  Column,
  RedirectMenu,
  Paragraph,
  Wave,
  Waves,
} from "./styles";
import "./styles.css";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
export default function Footer() {
  return (
    <Container>
      <Waves>
        <Wave id="wave1"></Wave>
        <Wave id="wave2"></Wave>
        <Wave id="wave3"></Wave>
        <Wave id="wave4"></Wave>
      </Waves>
      <SocialIcons>
        <SocialIconsLi>
          <BootstrapTooltip arrow title="Gitlab" placement="top">
            <Redirect
              href="https://gitlab.com/wylgneremiliano-7itec"
              target="_blank"
            >
              <ion-icon name="logo-gitlab"></ion-icon>
            </Redirect>
          </BootstrapTooltip>
        </SocialIconsLi>
        <SocialIconsLi>
          <BootstrapTooltip arrow title="Github" placement="top">
            <Redirect href="https://github.com/wylgneremiliano" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </Redirect>
          </BootstrapTooltip>
        </SocialIconsLi>
        <SocialIconsLi>
          <BootstrapTooltip arrow title="Linkedin" placement="top">
            <Redirect
              href="https://www.linkedin.com/in/wylgneremiliano/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </Redirect>
          </BootstrapTooltip>
        </SocialIconsLi>
        <SocialIconsLi>
          <BootstrapTooltip arrow title="Instagram" placement="top">
            <Redirect
              href="https://www.instagram.com/wylgneremiliano/"
              target="_blank"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Redirect>
          </BootstrapTooltip>
        </SocialIconsLi>
      </SocialIcons>
      <Column>
        <Row>
          <RedirectMenu className="Logo" href="#home">
            Home
          </RedirectMenu>
        </Row>
        <Row>
          <RedirectMenu className="Logo" href="#about">
            Sobre
          </RedirectMenu>
        </Row>
        <Row>
          <RedirectMenu className="Logo" href="#services">
            Habilidades
          </RedirectMenu>
        </Row>
        <Row>
          <RedirectMenu className="Logo" href="#work">
            Trabalho
          </RedirectMenu>
        </Row>
        <Row>
          <RedirectMenu className="Logo" href="#contact">
            Contato
          </RedirectMenu>
        </Row>
      </Column>
      <Paragraph>©2021 Online Tutors | All Rights Reserved</Paragraph>
    </Container>
  );
}
