import styled from "styled-components";

export const Container = styled.section`
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
  background-color: #282a36;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
`;
export const AboutMe = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: #fff;
`;

export const Paragraph = styled.p`
  color: #fff;
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
  background-color: #383a59;
  border-radius: 10px;
  overflow: hidden;
  .icon ion-icon {
    font-size: 5em;
    color: #fff;
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
  color: #fff;
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
  background-color: #2ecd70;
`;
export const TurfText = styled.h2`
  color: #fff;
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
    color: #b8b8b9 !important;
  }
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.status === "complete"
        ? "#D863BB"
        : props.status === "active"
        ? "#D863BB"
        : "#8c8c8c"};
  background-color: ${(props) =>
    props.status === "complete"
      ? "#D863BB"
      : props.status === "active"
      ? "#383A59"
      : "#383A59"}; ;
`;

export const ProgressIndicator = styled.div`
  width: 100%;
  padding: 25px;
  @media (max-width: 500px) {
    padding: 25px 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: #383a59;
  p {
    font-size: 10px;

    margin-top: 5px;
    color: ${(props) =>
      props.status === "complete"
        ? "#B8B8B9"
        : props.status === "active"
        ? "#D863BB"
        : "#ccc"};
  }
`;

export const Line = styled.div`
  @media (max-width: 500px) {
    width: 60px;
  }
  height: 2px;
  background-color: #d863bb;
`;

export const ContainerBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-top: 20px;
  /* background-color: red; */
`;

export const BallInside = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.status === "complete"
        ? "#D863BB"
        : props.status === "active"
        ? "#D863BB"
        : "#8c8c8c"};
  background-color: ${(props) =>
    props.status === "complete"
      ? "#D863BB"
      : props.status === "active"
      ? "#383A59"
      : "#383A59"}; ;
`;
