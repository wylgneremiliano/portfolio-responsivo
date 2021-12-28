import styled from "styled-components";

export const InputCustom = styled.textarea`
  resize: none;
  width: 100%;
  padding: 120px 10px;
  padding-top: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  background: ${(props) => props.theme.comment};
  color: ${(props) => props.theme.foreground};
  margin-bottom: 15px;
  border: 1px solid ${(props) => props.theme.background};
  border-radius: 5px;
  :focus {
    outline: none !important;
    border: 2px solid ${(props) => props.theme.pink};
  }
`;
