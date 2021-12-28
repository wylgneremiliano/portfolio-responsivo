import React from "react";
import ProgressIndicator from "./components/ProgressIndicator";
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
  ContainerBall,
  BallInside,
  OtherLibraries,
  Libraries,
  SpanCustom,
} from "./styles";
import redux from "assets/redux.svg";
import javascript from "assets/javascript.png";
import git from "assets/git.png";
import node from "assets/node.svg";
import maps from "assets/maps.png";
import mapbox from "assets/mapbox.png";

export default function Works() {
  return (
    <Container id="services">
      <Heading className="white">
        <AboutMe>Habilidades</AboutMe>
        <Paragraph>
          As principais tecnologias que trabalho hoje, estão classificadas por
          nível de conhecimento e manuseio no dia a dia, para ver os detalhes
          passe por cima de cada card.
        </Paragraph>
      </Heading>

      <ProgressIndicator />
      <Box>
        <ServiceBox href="https://pt-br.reactjs.org/" target="_blank">
          <Icon className="icon one">
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
        <ServiceBox href="https://redux.js.org/" target="_blank">
          <Icon className="icon two">
            <Image src={redux} />
          </Icon>
          <Content>
            <h2>Redux</h2>
            <p>É uma biblioteca para gerenciar estados em uma aplicação.</p>
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
        <ServiceBox href="https://www.javascript.com/" target="_blank">
          <Icon className="icon three">
            <Image src={javascript} />
          </Icon>
          <Content>
            <h2>JavaScript</h2>
            <p>
              Uma linguagem de programação que permite implementar itens
              complexos em páginas web.
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
        <ServiceBox href="https://git-scm.com/" target="_blank">
          <Icon className="icon four">
            <Image src={git} />
          </Icon>
          <Content>
            <h2>Git</h2>
            <p>
              Sistema de controle de versão moderno mais usado no mundo hoje.
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
        <ServiceBox href="https://nodejs.org/en/" target="_blank">
          <Icon className="icon five">
            <Image src={node} />
          </Icon>
          <Content>
            <h2>React</h2>
            <p>
              Node.js é um ambiente de execução JavaScript que permite executar
              aplicações de forma autônoma
            </p>
            <ContainerBall>
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="complete" />
              <BallInside status="active" />
              <BallInside />
              <BallInside />
              <BallInside />
            </ContainerBall>
          </Content>
        </ServiceBox>
        <ServiceBox href="https://en.wikipedia.org/wiki/SOLID" target="_blank">
          <Icon className="icon six">
            <TurfContainer>
              <TurfText> SOLID </TurfText>
            </TurfContainer>
          </Icon>
          <Content>
            <h2>SOLID</h2>
            <p>
              São cinco princípios da programação que facilitam no
              desenvolvimento de softwares.
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
        <ServiceBox href="https://www.mapbox.com/" target="_blank">
          <Icon className="icon seven">
            <Image src={mapbox} style={{ filter: "invert(100%)" }} />
          </Icon>
          <Content>
            <h2>MapBox</h2>
            <p>
              Uma API de mapas fornece inteligência de localização para
              desenvolvedores de software.
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
        <ServiceBox
          href="https://developers.google.com/?hl=pt-br"
          target="_blank"
        >
          <Icon className="icon eight">
            <Image src={maps} />
          </Icon>
          <Content>
            <h2>Google Maps</h2>
            <p>
              Uma API de mapas fornece inteligência de localização para
              desenvolvedores de software.
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
        <OtherLibraries>
          <SpanCustom>Outras bibliotecas relevantes: </SpanCustom>
          <Libraries
            href="https://www.npmjs.com/package/@turf/turf"
            target="_blank"
          >
            <span>#turf </span>
          </Libraries>
          <Libraries
            href="https://www.npmjs.com/package/@redux-requests/react"
            target="_blank"
          >
            <span>#redux request </span>
          </Libraries>
          <Libraries
            href="https://www.npmjs.com/package/styled-components"
            target="_blank"
          >
            <span>#styled components </span>
          </Libraries>
          <Libraries
            href="https://www.npmjs.com/package/@mui/material"
            target="_blank"
          >
            <span>#material ui </span>
          </Libraries>
          <Libraries href="https://www.npmjs.com/package/axios" target="_blank">
            <span>#axios </span>
          </Libraries>
          <Libraries
            href="https://www.npmjs.com/package/date-fns"
            target="_blank"
          >
            <span>#date-fns </span>
          </Libraries>
          <Libraries
            href="https://www.npmjs.com/package/express"
            target="_blank"
          >
            <span>#express </span>
          </Libraries>
          <Libraries
            href="https://www.npmjs.com/package/mongoose"
            target="_blank"
          >
            <span>#mongoose </span>
          </Libraries>
        </OtherLibraries>
      </Box>
    </Container>
  );
}
