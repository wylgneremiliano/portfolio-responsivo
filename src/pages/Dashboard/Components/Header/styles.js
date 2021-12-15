import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  @media only screen and (max-width: 991px) {
    padding: 20px 50px;
  }

  @media (max-width: 991px) {
    .sticky {
      padding: 20px 50px;
      z-index: 1000;
    }

    .sticky div {
      padding: 30px 50px;
    }

    ul li a {
      color: #111;
    }
    ul li {
      color: #111;
      font-size: 26px;
      margin: 20px;
    }
  }

  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
  transition: 0.3s;
`;
export const Logo = styled.a`
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
`;
export const Redirect = styled.a`
  color: #fff;
  margin: 0 15px;
  transition: 0.5s;
  letter-spacing: 2px;

  cursor: pointer;
`;
export const Column = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  height: 100%;
  @media (max-width: 991px) {
    position: fixed;
    top: 75px;
    left: ${(props) => (!props.toogleButton ? "-100%" : 0)};
    display: block;
    padding: 100px 50px;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: #fff;
    transition: 0.5s;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
export const Row = styled.li``;

export const Toggle = styled(MenuIcon)`
  opacity: 0;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    opacity: 1;
    color: ${(props) => (props.scrollListener ? "#000" : "#fff")};
    background-size: 30px;
    cursor: pointer;
  }
`;
export const CloseButton = styled(CloseIcon)`
  opacity: 0;
  @media (max-width: 991px) {
    width: 40px;
    height: 40px;
    opacity: 1;
    color: ${(props) => (props.scrollListener ? "#000" : "#fff")};
    background-size: 30px;
    cursor: pointer;
  }
`;
