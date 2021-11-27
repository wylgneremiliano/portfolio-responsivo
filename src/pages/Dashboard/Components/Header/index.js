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
          <Redirect>Home</Redirect>
        </Row>
        <Row>
          <Redirect>Sobre</Redirect>
        </Row>
        <Row>
          <Redirect>Serviços</Redirect>
        </Row>
        <Row>
          <Redirect>Trabalho</Redirect>
        </Row>
        <Row>
          <Redirect>Não sei ainda</Redirect>
        </Row>
        <Row>
          <Redirect>Contato</Redirect>
        </Row>
      </Column>
    </Container>
  );
}
