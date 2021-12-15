import React from "react";

import {
  Container,
  Heading,
  AboutMe,
  Paragraph,
  Content,
  ServicesBx,
  Image,
} from "./styles";
import "./styles.css";
import icon1 from "assets/icon1.png";
import icon2 from "assets/icon2.png";
import icon3 from "assets/icon3.png";
import icon4 from "assets/icon4.png";
import icon5 from "assets/icon5.png";
import icon6 from "assets/icon6.png";
export default function Works() {
  return (
    <Container id="services">
      <Heading className="white">
        <AboutMe>Outros serviços</AboutMe>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Paragraph>
      </Heading>
      <Content>
        <ServicesBx>
          <Image src={icon1} />
          <AboutMe>Web Design</AboutMe>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
        </ServicesBx>
        <ServicesBx>
          <Image src={icon2} />
          <AboutMe>Web Development</AboutMe>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
        </ServicesBx>
        <ServicesBx>
          <Image src={icon3} />
          <AboutMe>Android App</AboutMe>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
        </ServicesBx>
        <ServicesBx>
          <Image src={icon4} />
          <AboutMe>Photography</AboutMe>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
        </ServicesBx>
        <ServicesBx>
          <Image src={icon5} />
          <AboutMe>Content Writing</AboutMe>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
        </ServicesBx>
        <ServicesBx>
          <Image src={icon6} />
          <AboutMe>Video Editing</AboutMe>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Paragraph>
        </ServicesBx>
      </Content>
    </Container>
  );
}
