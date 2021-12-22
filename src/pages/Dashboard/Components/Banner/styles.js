import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  background: #282a36;
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  @media (max-width: 991px) {
    padding: 150px 50px 100px;
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;
    }
    a {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    padding: 50px;

    h2 {
      font-size: 1.2em;
    }
    h3 {
      font-size: 0.9em;
    }
    a {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 16px;
    }
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h2`
  font-size: 3em;
  color: #fff;
  font-weight: 500;
  line-height: 1.5em;
`;
export const SubTitle = styled.h3`
  color: #fff;
  font-weight: 500;
  line-height: 1.5em;
`;

export const AboutMe = styled.a`
  position: relative;
  background-color: #d863bb;
  display: inline-block;
  color: #fff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
  cursor: pointer;
  overflow-y: hidden;
`;

export const Span = styled.span`
  font-size: 1.5em;
  font-weight: 700;
`;

export const AnimationContainer = styled.div`
  pointer-events: none;
`;
