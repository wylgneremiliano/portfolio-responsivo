import React, { useState } from "react";
import Lottie from "react-lottie";

import {
  Container,
  SubTitle,
  TextContainer,
  Title,
  AboutMe,
  Span,
  AnimationContainer,
} from "./styles";
import animationData from "assets/astronaut2.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Banner() {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });
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
      <AnimationContainer>
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </AnimationContainer>
    </Container>
  );
}
