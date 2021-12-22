import React from "react";

import {
  Container,
  Content,
  ServiceBox,
  Icon,
  Box,
  Heading,
  AboutMe,
  Paragraph,
  Image,
  TurfContainer,
  TurfText,
  Ball,
  ProgressIndicator,
  CardIndicator,
  Line,
  ContainerBall,
  BallInside,
} from "./styles";
import "./styles.css";
import redux from "assets/redux.svg";
import javascript from "assets/javascript.png";
import git from "assets/git.png";
import node from "assets/node.svg";
import maps from "assets/maps.svg";
import mapbox from "assets/mapbox.png";
export default function Works() {
  return (
    <Container id="services">
      <Heading className="white">
        <AboutMe>Habilidades</AboutMe>
        <Paragraph>
          As principais tecnologias que trabalho hoje, estão classificadas por
          nível de conhecimento e manuseio no dia a dia{" "}
        </Paragraph>
      </Heading>
      <ProgressIndicator>
        <CardIndicator status="complete">
          <Ball status="complete">
            <p>1</p>
          </Ball>
          <p>COMPLETO</p>
        </CardIndicator>
        <Line />
        <CardIndicator status="active">
          <Ball status="active">
            <p>2</p>
          </Ball>
          <p>ATUAL</p>
        </CardIndicator>
        <Line />
        <CardIndicator status="next">
          <Ball status="next">
            <p>3</p>
          </Ball>
          <p>PRÓXIMO</p>
        </CardIndicator>
      </ProgressIndicator>
      <Box>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#333333" }}>
            <ion-icon name="logo-react" style={{ color: "#4eb7ff" }}></ion-icon>
          </Icon>
          <Content>
            <h2>React</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
            <ContainerBall>
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="active" />
              <BallInside />
            </ContainerBall>
          </Content>
        </ServiceBox>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#f2f2f2" }}>
            <Image src={redux} />
          </Icon>
          <Content>
            <h2>Redux</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
            <ContainerBall>
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="active" />
              <BallInside />
              <BallInside />
            </ContainerBall>
          </Content>
        </ServiceBox>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#f7e018" }}>
            <Image src={javascript} />
          </Icon>
          <Content>
            <h2>JavaScript</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
            <ContainerBall>
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="active" />
              <BallInside />
            </ContainerBall>
          </Content>
        </ServiceBox>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#233056" }}>
            <Image src={git} />
          </Icon>
          <Content>
            <h2>Git</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
            <ContainerBall>
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="active" />
              <BallInside />
            </ContainerBall>
          </Content>
        </ServiceBox>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#233056" }}>
            <Image src={node} />
          </Icon>
          <Content>
            <h2>React</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
            <ContainerBall>
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="active" />
              <BallInside />
              <BallInside />
              <BallInside />
              <BallInside />
              <BallInside />
            </ContainerBall>
          </Content>
        </ServiceBox>

        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#111" }}>
            <Image src={mapbox} style={{ filter: "invert(100%)" }} />
          </Icon>
          <Content>
            <h2>React</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
          </Content>
        </ServiceBox>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#fff" }}>
            <Image src={maps} />
          </Icon>
          <Content>
            <h2>React</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
          </Content>
        </ServiceBox>
        <ServiceBox>
          <Icon className="icon" style={{ backgroundColor: "#2ECD70" }}>
            <TurfContainer>
              <TurfText> TURF </TurfText>
            </TurfContainer>
          </Icon>
          <Content>
            <h2>React</h2>
            <p>
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil.
            </p>
          </Content>
        </ServiceBox>
      </Box>
    </Container>
  );
}
