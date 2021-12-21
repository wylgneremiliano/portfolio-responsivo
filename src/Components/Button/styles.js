import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  background-color: #2196f3;
  padding: 15px 5px;

  cursor: pointer;
  :hover {
    background-color: ${shade(0.2, "#2196f3")};
  }
`;
