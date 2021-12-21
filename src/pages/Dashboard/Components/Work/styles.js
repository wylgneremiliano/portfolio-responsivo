import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.section`
  display: flex;
  @media (max-width: 500px) {
    font-size: 24px;
    padding: 90px 20px;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 15px;
      text-align: center;
    }
    p {
      font-size: 12px;
    }
  }
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
`;
export const AboutMe = styled.h2`
  font-weight: 600;
  font-size: 30px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  flex-wrap: wrap;
`;
export const WorkBx = styled.div`
  width: 50%;
  /* @media (max-width: 991px) {
    width: 50%;
  } */
  @media (max-width: 500px) {
    width: 100vw;
    padding: 5px 15px;
  }
  padding: 20px;
`;
export const Image = styled.img`
  width: 100%;
`;

export const Btn = styled.div`
  position: relative;
  background-color: #2196f3;
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

  :hover {
    background-color: ${shade(0.2, "#2196f3")};
  }
`;

export const Redirect = styled.a`
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
  transition: 0.5s;
`;
