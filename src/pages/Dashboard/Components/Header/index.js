import React from "react";

import { Container, Column, Logo, Redirect, Row, Toggle } from "./styles";
import "./styles.css";
export default function Header() {
  return (
    <Container>
      <Logo className="Logo">Portfolio</Logo>
      <Toggle></Toggle>
      <Column>
        <Row>
          <Redirect className="Logo">Home</Redirect>
        </Row>
        <Row>
          <Redirect className="Logo">Sobre</Redirect>
        </Row>
        <Row>
          <Redirect className="Logo">Serviços</Redirect>
        </Row>
        <Row>
          <Redirect className="Logo">Trabalho</Redirect>
        </Row>
        <Row>
          <Redirect className="Logo">Não sei ainda</Redirect>
        </Row>
        <Row>
          <Redirect className="Logo">Contato</Redirect>
        </Row>
      </Column>
    </Container>
  );
}
