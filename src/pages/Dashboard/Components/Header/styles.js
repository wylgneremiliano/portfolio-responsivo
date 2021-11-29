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
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
  transition: 0.5s;
`;
export const Column = styled.ul`
  position: relative;
  display: flex;
`;
export const Row = styled.li`
  position: relative;
  list-style: none;
`;

export const Toggle = styled.div``;
