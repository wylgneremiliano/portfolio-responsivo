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
import animationData from "assets/background.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Banner() {
  const [animationState, setAnimationState] = useState({
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
        <SubTitle>Sou desenvolvedor web front-end.</SubTitle>
        <AboutMe>Sobre mim</AboutMe>
      </TextContainer>
      <AnimationContainer>
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </AnimationContainer>
    </Container>
  );
}
