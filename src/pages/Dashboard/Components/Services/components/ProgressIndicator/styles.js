import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 40%;
  cursor: pointer;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 25px;
  @media (max-width: 500px) {
    padding: 25px 0;
    width: 100%;
  }

  @media (min-width: 800px) {
    padding: 25px 0;
    width: 56.4%;
  }
  @media (min-width: 1300px) {
    width: 70.4%;
  }
  @media (min-width: 1900px) {
    width: 48%;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
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
    color: ${(props) => props.theme.text} !important;
  }

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
  background-color: ${(props) => props.theme.background};
  p {
    font-size: 11px;
    margin-top: 5px;
    color: ${(props) =>
      props.status === "complete"
        ? (props) => props.theme.text
        : props.status === "active"
        ? (props) => props.theme.pink
        : (props) => props.theme.foreground};
  }
`;

export const Line = styled.div`
  width: 100%;

  height: 2px;
  background-color: ${(props) => props.theme.pink};
`;
