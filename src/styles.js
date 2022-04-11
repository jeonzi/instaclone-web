import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
	fontColor: "#2c2c2c",
	bgColor: "white",
};

export const darkTheme = {
	fontColor: "white",
	bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
	input {
		all: unset;
	}
	* {
		box-sizing: border-box ;
	}
    body {
	    /* background-color: ${(props) => props.theme.bgColor}; */
		background-color: #fafafa;
		font-size: 14px;
		font-family:'Open Sans', sans-serif ;
    }
	a {
		text-decoration: none;
	}
`;
