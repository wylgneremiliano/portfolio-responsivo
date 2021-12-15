import React, { useState, useEffect } from "react";

import {
  Container,
  Column,
  Logo,
  Redirect,
  Toggle,
  Row,
  CloseButton,
} from "./styles";
import "./styles.css";
export default function Header() {
  const [toogleButton, setToogleButton] = useState(false);

  const [scrollListener, setScrollListener] = useState(false);
  const redirect = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  };
  useEffect(() => {
    onScroll();
  }, [scrollListener]);
  const onScroll = () => {
    window.addEventListener("scroll", () => {
      setScrollListener(window.scrollY > 75);
    });
  };
  const redirectHome = () => {
    window.scrollTo(0, 0);
    setToogleButton(false);
  };
  const redirectAbout = () => {
    const about = document.querySelector("#about");
    window.scrollTo(0, about.scrollHeight + 220);
    setToogleButton(false);
  };
  const redirectServices = () => {
    const services = document.querySelector("#services");
    window.scrollTo(0, services.scrollHeight + 500);
    setToogleButton(false);
  };
  const redirectWork = () => {
    const work = document.querySelector("#work");
    window.scrollTo(0, work.scrollHeight + 450);
    setToogleButton(false);
  };
  const redirectContact = () => {
    const contact = document.querySelector("#contact");
    window.scrollTo(0, contact.scrollHeight + 285);
    setToogleButton(false);
  };
  return (
    <Container>
      <Logo className="Logo">Portfolio</Logo>
      {toogleButton ? (
        <CloseButton
          onClick={() => setToogleButton(false)}
          scrollListener={scrollListener}
        />
      ) : (
        <Toggle
          className="toggle"
          onClick={() => setToogleButton(true)}
          scrollListener={scrollListener}
        />
      )}

      <Column toogleButton={toogleButton}>
        <Row>
          <Redirect className="Logo" onClick={() => redirectHome()}>
            Home
          </Redirect>
        </Row>
        <Row>
          <Redirect className="Logo" onClick={() => redirectAbout()}>
            Sobre
          </Redirect>
        </Row>
        <Row>
          <Redirect className="Logo" onClick={() => redirectServices()}>
            Serviços
          </Redirect>
        </Row>
        <Row>
          <Redirect className="Logo" onClick={() => redirectWork()}>
            Trabalho
          </Redirect>
        </Row>
        <Row>
          <Redirect className="Logo" onClick={() => redirectContact()}>
            Contato
          </Redirect>
        </Row>
      </Column>
    </Container>
  );
}
