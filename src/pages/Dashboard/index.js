import React, { useEffect, useState } from "react";

import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { Container } from "./styles";
import Footer from "./Components/Footer";

export default function Dashboard() {
  const [goingUp, setGoingUp] = useState(false);
  const redirect = () => {
    console.log(process.env.REACT_APP_REDIRECT);
    if (!!process.env.REACT_APP_REDIRECT) {
      window.location.href = process.env.REACT_APP_LINK
        ? process.env.REACT_APP_LINK
        : "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    }
  };
  useEffect(() => {
    // redirect();
    onScroll();
  }, [goingUp]);
  const onScroll = () => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 75);
      setGoingUp(header);
    });
  };

  return (
    <Container id="home">
      <Header />
      <Banner />
      <About />
      <Services />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </Container>
  );
}
