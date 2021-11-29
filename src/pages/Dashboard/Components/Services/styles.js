import styled from "styled-components";

export const Container = styled.section`
  padding: 100px;
  background-color: #111;
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
`;
export const AboutMe = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;

export const Paragraph = styled.p``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const ServicesBx = styled.div`
  padding: 40px 20px;
  background-color: #222;
  color: #fff;
  max-width: 340px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #2196f3;
  }
  transition: 0.5s;
`;

export const Image = styled.img`
  max-width: 80px;
  filter: invert(1);
`;
