import React from "react";

import {
  Container,
  SubTitle,
  TextContainer,
  Title,
  AboutMe,
  Span,
} from "./styles";

export default function Banner() {
  return (
    <Container>
      <TextContainer>
        <Title>
          Oi, eu sou
          <br /> <Span>Wylgner Emiliano.</Span>
        </Title>
        <SubTitle>Desenvolvedor front-end.</SubTitle>
        <AboutMe href="#about">Sobre mim</AboutMe>
      </TextContainer>
    </Container>
  );
}
