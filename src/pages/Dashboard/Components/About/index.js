import React, { useState } from "react";
import Lottie from "react-lottie";

import {
  AboutMe,
  Container,
  Content,
  ContentBx,
  ContentH3,
  Heading,
  Paragraph,
  W50,
  Redirect,
} from "./styles";

import animationData from "assets/web-development.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function About() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  return (
    <Container id="about">
      <Heading>
        <AboutMe>Sobre mim</AboutMe>
      </Heading>
      <Content>
        <ContentBx>
          <ContentH3>Sou desenvolvedor front-end.</ContentH3>
          <Paragraph>
            Não me esqueço da primeira vez que tive contato com programação, um
            amigo meu me pediu para ir em sua casa, quando cheguei lá, ele
            estava com várias coisas abertas no computador dele me dizendo que
            queria criar um jogo e que era para ajudar ele, na minha cabeça era
            uma coisa muito complexa, por mais que o jogo fosse simples. Nessa
            ocasião se tratava de um jogo em 2D estilo Mario. Quando a gente
            começou a ver como aquilo funcionava e tudo fazia muito sentido
            fiquei muito animado, principalmente quando o desenvolvimento do
            jogo tomava forma, as animações, a interação, tudo era muito
            empolgante. Isso eu tinha por volta dos 16 anos. Quando me formei no
            ensino médio, não tinha dúvidas no que iria ingressar na faculdade.
            Logo comecei Análise e desenvolvimento de sistemas, onde me dei
            muito bem com a área de programação, comecei a aprender o básico da
            linguagem C, depois passei para Java e por fim PHP, onde minha
            carreira profissional começaria. Logo depois que finalizei a
            faculdade me mudei para uma cidade maior a procura do meu primeiro
            emprego. Fiz alguns trabalhos com PHP, mas não me agradava muito
            alguns pontos com a proposta do PHP. Foi quando fui procurar outras
            tecnologias para desenvolvimento web e me deparei com o React. O
            conceito de SPA e a facilidade de manipular estados sem precisar
            recarregar a página por completo me ganharam, além disso tem o
            react-native para mobile, bem completinho esse segmento, sem contar
            que tem o Node.js que ta tudo ali no javascript. Hoje desenvolvo em
            React à 2 anos e meio, aprendi muita coisa nesse tempo, errei muito,
            tive meus acertos e continuo sempre em evolução. No tópico de
            habilidades vou detalhar melhor as tecnologias que domino. Aqui é
            uma breve apresentação sobre minha história.
            <br />
            <br />
            Vamos lá, vou falar um pouco sobre minha personalidade. Sou uma
            pessoa bem simples, bem curioso, paciente e gosto de ficar na paz.
            Sou daquele tipo de pessoa que conversa muito e bem fácil de
            conviver, detalhe é que eu sempre trabalhei remotamente, já estou
            bem habituado. Nas horas vagas gosto de ir na academia, também gosto
            de jogar alguns jogos como CSGO e The Witcher, se você está
            interessado em me conhecer melhor, não se acanhe e vá para a sessão{" "}
            <Redirect href="#contact">CONTATO</Redirect> e venha saber mais
            sobre mim :D
          </Paragraph>
        </ContentBx>
        <W50>
          <Lottie
            style={{ filter: "hue-rotate(85deg) contrast(80%)" }}
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </W50>
      </Content>
    </Container>
  );
}
