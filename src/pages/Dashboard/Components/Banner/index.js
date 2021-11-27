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
        <SubTitle>Sou desenvolvedor web front-end.</SubTitle>
        <AboutMe>Sobre mim</AboutMe>
      </TextContainer>
    </Container>
  );
}
