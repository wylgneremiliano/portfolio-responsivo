import styled from "styled-components";
import logo from "assets/banner.jpg";
export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  background: ${`url(${logo})`};
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
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
  overflow-y: hidden;
`;

export const Span = styled.span`
  font-size: 1.5em;
  font-weight: 700;
`;
