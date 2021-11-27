import styled from "styled-components";
import { shade } from "polished";
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 50px 100px;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  font-weight: 500;
  transform: translate(-50%, -50%);
  background-color: #2196f3;
  color: #fff;
  :hover {
    background-color: ${shade(0.2, "#2196f3")};
  }
  transition: 0.5s;
`;
