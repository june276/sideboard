import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
    overflow: scroll;

		&::-webkit-scrollbar {
			display: none;
		}



  }
`;

export default GlobalStyle;