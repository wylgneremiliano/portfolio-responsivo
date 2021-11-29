import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
  transition: 0.5s;
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
  text-decoration: none;
  cursor: pointer;
`;
export const Column = styled.li`
  position: relative;
  display: flex;
  height: 100%;
`;
export const Row = styled.div``;

export const Toggle = styled.div``;
