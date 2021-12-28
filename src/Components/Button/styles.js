import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: ${(props) => props.theme.foreground};
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  background-color: ${(props) => props.theme.pink};
  padding: 15px 5px;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100%;
  }
  :hover {
    background-color: ${(props) => shade(0.2, props.theme.pink)};
  }
`;
