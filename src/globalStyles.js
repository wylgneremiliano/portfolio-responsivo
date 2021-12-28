import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;

   ::-moz-selection { 
  color: ${(props) => props.theme.foreground};
  background: ${(props) => props.theme.purple};
}

::selection {
  color:${(props) => props.theme.foreground};
  background:${(props) => props.theme.purple};
}
   ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    
  }
   ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #ccc 14%, #ccc 67%);
    border-radius: 20px;
    
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #808080 14%, #808080 64%);
  }
  ::-webkit-scrollbar-track {
      background:${(props) => props.theme.currentLine};;
      box-shadow: inset 7px 10px 12px ${(props) => props.theme.comment};;
  }
  scrollbar-color: #ccc ${(props) => props.theme.currentLine};
    scrollbar-width: thin;
  }

 
`;
