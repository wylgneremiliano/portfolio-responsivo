import styled from "styled-components";

export const Container = styled.section`
  padding: 20px 100px;
  background-color: #111;

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
    padding: 50px;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
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
  @media (max-width: 991px) {
    margin: 10px;
  }
  @media (max-width: 500px) {
    margin: 10px 0;
  }
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
