import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
	bgColor: "#FAFAFA",
	fontColor: "rgb(38, 38, 38)",
	borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
	fontColor: "white",
	bgColor: "#000",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
	input {
		all: unset; // input의 모든 porperty가 삭제됨
	}
	* {
		box-sizing: border-box ;
	}
    body {
	    background-color: ${(props) => props.theme.bgColor};
		font-size: 14px;
		font-family:'Open Sans', sans-serif ;
		color: ${(props) => props.theme.fontColor};
    }
	a {
		text-decoration: none;
	}

`;
