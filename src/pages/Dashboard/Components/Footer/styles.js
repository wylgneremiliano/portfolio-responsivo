import styled from "styled-components";
import wave from "assets/wave.png";
export const Container = styled.footer`
  position: relative;
  width: 100%;
  background-color: #3586ff;
  filter: hue-rotate(85deg);
  height: 200px;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 510px) {
    ul li {
      font-size: 14px;
    }
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const SocialIconsLi = styled.li`
  list-style: none;
`;

export const Redirect = styled.a`
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;

  :hover {
    transform: translateY(-10px);
  }
`;

export const RedirectMenu = styled.a`
  font-size: 20px;
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  display: inline-block;
  transition: 0.5s;
  @media (max-width: 510px) {
    font-size: 12px;
    margin: 0 7px;
  }
  :hover {
    transform: translateY(-10px);
  }
`;

export const Column = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  height: 100%;
`;
export const Row = styled.li`
  list-style: none;
`;

export const Paragraph = styled.p`
  color: #fff;
  margin-top: 10px;
  @media (max-width: 510px) {
    font-size: 11px;
  }
`;

export const Waves = styled.div``;

export const Wave = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: ${`url(${wave})`};
  background-size: 1000px 100px;
`;
