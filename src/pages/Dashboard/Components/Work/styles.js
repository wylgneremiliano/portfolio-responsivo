import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.section`
  display: flex;

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
`;

export const Paragraph = styled.p``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const WorkBx = styled.div`
  width: 50%;
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
