import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;

 
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
      background: #111;
      box-shadow: inset 7px 10px 12px #111;
  }
  scrollbar-color: #ccc #111;
    scrollbar-width: thin;
  }
`;
