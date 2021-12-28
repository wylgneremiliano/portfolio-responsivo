import React, { useState, useEffect } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import Modal from "@mui/material/Modal";
import {
  Container,
  Column,
  Logo,
  Redirect,
  Toggle,
  Row,
  CloseButton,
  Box,
} from "./styles";

export default function Header() {
  const [toogleButton, setToogleButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [scrollListener, setScrollListener] = useState(false);
  const redirect = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  };
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    onScroll();
  }, [scrollListener]);
  const onScroll = () => {
    window.addEventListener("scroll", () => {
      setScrollListener(window.scrollY > 75);
    });
  };
  return (
    <>
      <Container background={scrollListener}>
        <Logo className="Logo" href="#home">
          Portfolio
        </Logo>
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
            <Redirect className="Logo" href="#home">
              Home
            </Redirect>
          </Row>
          <Row>
            <Redirect className="Logo" href="#about">
              Sobre
            </Redirect>
          </Row>
          <Row>
            <Redirect className="Logo" href="#services">
              Habilidades
            </Redirect>
          </Row>
          <Row>
            <Redirect className="Logo" href="#work">
              Trabalho
            </Redirect>
          </Row>
          <Row>
            <Redirect className="Logo" href="#contact">
              Contato
            </Redirect>
          </Row>
          <Row>
            <Redirect className="Logo" onClick={() => setShowModal(!showModal)}>
              <PaletteIcon />
            </Redirect>
          </Row>
        </Column>

        {showModal && (
          <Modal open={showModal} onClose={handleClose}>
            <Box>
              <h2>Tema personalizado</h2>
              <p>
                Escolha um tema de sua preferência e altere para uma melhor
                experiencia
              </p>
            </Box>
          </Modal>
        )}
      </Container>
    </>
  );
}
