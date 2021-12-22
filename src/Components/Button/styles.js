import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  background-color: #d863bb;
  padding: 15px 5px;
  cursor: pointer;
  :hover {
    background-color: ${shade(0.2, "#d863bb")};
  }
`;
