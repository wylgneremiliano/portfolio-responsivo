import styled from "styled-components";
import colors from "colors";

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
    color: ${colors.foreground};
  }
  background-color: ${colors.currentLine}; ;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: ${colors.background};
`;
export const AboutMe = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: ${colors.foreground}; ;
`;

export const Paragraph = styled.p`
  color: ${colors.foreground};
`;

export const Box = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const ServiceBox = styled.div`
  position: relative;
  cursor: pointer;
  width: 400px;
  height: 300px;
  background-color: ${colors.background};
  border-radius: 10px;
  overflow: hidden;
  .icon ion-icon {
    font-size: 5em;
    color: ${colors.foreground};
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
  color: ${colors.text};
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
    font-size: 14px;
    line-height: 1.5em;
  }
`;

export const Image = styled.img`
  width: 5em;
`;

export const TurfContainer = styled.div`
  background-color: ${colors.green};
`;
export const TurfText = styled.h2`
  color: ${colors.text};
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  p {
    font-size: 10px !important;
    margin-top: 0 !important;
    color: ${colors.text} !important;
  }

  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.status === "complete"
        ? colors.pink
        : props.status === "active"
        ? colors.pink
        : colors.text};
  background-color: ${(props) =>
    props.status === "complete"
      ? colors.pink
      : props.status === "active"
      ? colors.background
      : colors.background};
`;

export const ProgressIndicator = styled.div`
  position: relative;
  width: 40%;

  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 25px;
  @media (max-width: 500px) {
    padding: 25px 0;
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const CardIndicator = styled.div`
  padding: 20px;
  flex-direction: column;
  min-width: 100px;
  @media (max-width: 500px) {
    padding: 15px;
    min-width: 80px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.background};
  p {
    font-size: 10px;

    margin-top: 5px;
    color: ${(props) =>
      props.status === "complete"
        ? colors.text
        : props.status === "active"
        ? colors.pink
        : colors.text};
  }
`;

export const Line = styled.div`
  width: 100%;

  height: 2px;
  background-color: ${colors.pink};
`;

export const ContainerBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-top: 20px;
`;

export const BallInside = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.status === "complete"
        ? colors.pink
        : props.status === "active"
        ? colors.pink
        : colors.text};
  background-color: ${(props) =>
    props.status === "complete"
      ? colors.pink
      : props.status === "active"
      ? colors.background
      : colors.background};
`;
