import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 100px;
  @media (max-width: 991px) {
    padding: 150px 50px 100px;
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 20;
    }
  }
  @media (max-width: 500px) {
    padding: 150px 25px 100px;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
  .white {
    color: ${(props) => props.theme.foreground};
  }
  background-color: ${(props) => props.theme.currentLine};
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: ${(props) => props.theme.background};
`;
export const AboutMe = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: ${(props) => props.theme.foreground};
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.foreground};
`;

export const OtherLibraries = styled.div`
  position: relative;
  width: 96.7%;
  padding: 30px 0;
  margin-top: 20px;
  @media (max-width: 500px) {
    p {
      margin-right: 50px;
    }
  }
  @media (max-width: 1400px) {
    padding-left: 13.3%;
  }

  @media (min-width: 800px) {
    margin-top: 50px;
  }
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  p {
    font-size: 15px;
    color: ${(props) => props.theme.foreground};
  }
`;

export const Libraries = styled.a`
  cursor: pointer;

  padding: 3px 7px;

  @media (max-width: 500px) {
    margin: 10px 0;
    margin-right: 10px;
  }

  margin: 10px 0;
  margin-right: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.foreground};
  background: ${(props) => props.theme.purple};
`;

export const Box = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ServiceBox = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  width: 400px;
  height: 300px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-radius: 10px;
  overflow: hidden;
  .icon ion-icon {
    font-size: 5em;
    color: ${(props) => props.theme.foreground};
  }
  :hover .icon ion-icon {
    font-size: 2em;
  }
  :hover .icon img {
    width: 2em;
  }
  :hover .icon h2 {
    font-size: 18px;
  }
  :hover .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 30px;
    left: calc(50% - 50px);
  }
  :hover div {
    transform: scale(1);
  }
  .one {
    background-color: ${(props) => props.theme.background};
  }
  .two {
    background-color: ${(props) => props.theme.foreground};
  }
  .three {
    background-color: ${(props) => props.theme.yellowSecondary};
  }
  .four {
    background-color: ${(props) => props.theme.blueSecondary};
  }
  .five {
    background-color: ${(props) => props.theme.blueSecondary};
  }
  .six {
    background-color: ${(props) => props.theme.cyan};
  }
  .seven {
    background-color: ${(props) => props.theme.blue};
  }
  .eight {
    background-color: ${(props) => props.theme.whiteLight};
  }
`;
export const SpanCustom = styled.span`
  color: ${(props) => props.theme.foreground};
  position: absolute;

  left: 0;
  top: 0;
  @media (min-width: 800px) {
    top: 0px;
  }
  @media (max-width: 1400px) {
    left: 13.7%;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
export const Content = styled.div`
  position: relative;
  padding: 20px;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 120px;
  z-index: 1;
  transform: scale(0);
  transition: 0.5s;
  h2 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 300;
    font-size: 13px;
    line-height: 1.5em;
  }
`;

export const Image = styled.img`
  width: 5em;
`;

export const TurfContainer = styled.div`
  background-color: ${(props) => props.theme.cyan};
`;
export const TurfText = styled.h2`
  color: ${(props) => props.theme.background};
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const ContainerBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-top: 10px;
`;

export const BallInside = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.status === "complete"
        ? (props) => props.theme.pink
        : props.status === "active"
        ? (props) => props.theme.pink
        : (props) => props.theme.text};
  background-color: ${(props) =>
    props.status === "complete"
      ? (props) => props.theme.pink
      : props.status === "active"
      ? (props) => props.theme.background
      : (props) => props.theme.background};
`;
