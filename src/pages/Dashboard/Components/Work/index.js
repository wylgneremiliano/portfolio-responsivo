import React from "react";

import {
  Container,
  Heading,
  AboutMe,
  Paragraph,
  Content,
  WorkBx,
  Image,
  Redirect,
  Btn,
} from "./styles";
import logo1 from "assets/product1.jpg";
import logo2 from "assets/product2.jpg";
import logo3 from "assets/product3.jpg";
import logo4 from "assets/product4.jpg";
export default function Work() {
  return (
    <Container id="work">
      <Heading>
        <AboutMe>Nosso Último Trabalho</AboutMe>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Paragraph>
      </Heading>
      <Content>
        <WorkBx>
          <Image src={logo1}></Image>
        </WorkBx>
        <WorkBx>
          <Image src={logo2}></Image>
        </WorkBx>
        <WorkBx>
          <Image src={logo3}></Image>
        </WorkBx>
        <WorkBx>
          <Image src={logo4}></Image>
        </WorkBx>
      </Content>
      <Redirect href="#">
        <Btn>Ver mais</Btn>
      </Redirect>
    </Container>
  );
}
