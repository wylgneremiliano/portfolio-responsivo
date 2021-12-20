import styled from "styled-components";
export const Container = styled.section`
  padding: 100px;
  @media (max-width: 991px) {
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 500px) {
    font-size: 24px;
    padding: 100px 20px;
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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 991px) {
    flex-direction: column;
    div {
      max-width: 100%;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    div {
      max-width: 100%;
      padding-right: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
export const ContentBx = styled.div`
  max-width: 50%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 500px) {
    max-width: 100%;
  }
  margin-bottom: 20px;
`;
export const ContentH3 = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
  color: #111;
`;

export const Paragraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

export const W50 = styled.div`
  pointer-events: none;
`;

export const Image = styled.img``;
