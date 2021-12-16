import React, { useEffect, useState } from "react";

import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { Container } from "./styles";

export default function Dashboard() {
  const [goingUp, setGoingUp] = useState(false);
  const redirect = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  };
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
    <Container id="home" onClick={redirect}>
      <Header id="header" />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </Container>
  );
}
