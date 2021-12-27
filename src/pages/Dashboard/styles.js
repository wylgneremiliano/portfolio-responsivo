import styled from "styled-components";
import colors from "colors";

export const Container = styled.div`
  background-color: ${colors.currentLine};
  .sticky {
    background: ${colors.background};
    padding: 20px 100px;
    transition: 0.5s;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: 0.5s;

    @media only screen and (max-width: 500px) {
      padding: 20px 50px;
    }
  }
`;
