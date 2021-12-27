import styled from "styled-components";
import colors from "colors";

export const InputCustom = styled.textarea`
  resize: none;
  width: 100%;
  padding: 120px 10px;
  padding-top: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: ${colors.comment};
  color: ${colors.foreground};
  margin-bottom: 15px;
  border: 1px solid ${colors.background};
  border-radius: 5px;
  :focus {
    outline: none !important;
    border: 2px solid ${colors.pink};
  }
`;
