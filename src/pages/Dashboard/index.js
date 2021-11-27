import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import { Container } from "./styles";

export default function Dashboard() {
  const [goingUp, setGoingUp] = useState(false);
  useEffect(() => {
    onScroll();
  }, [goingUp]);
  const onScroll = () => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
      setGoingUp(header);
    });
  };
  return (
    <Container>
      <Header />
      <Banner />
      <About />
    </Container>
  );
}
