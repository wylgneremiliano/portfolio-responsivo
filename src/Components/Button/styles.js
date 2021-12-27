import styled from "styled-components";
import { shade } from "polished";
import colors from "colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: ${colors.foreground};
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  background-color: ${colors.pink};
  padding: 15px 5px;
  cursor: pointer;
  :hover {
    background-color: ${shade(0.2, colors.pink)};
  }
`;
