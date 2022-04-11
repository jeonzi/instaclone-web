import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
	accentColor: "#fafafa",
	borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
	fontColor: "white",
	bgColor: "#2c2c2c",
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
	    /* background-color: ${(props) => props.theme.bgColor}; */
		background-color: #fafafa;
		font-size: 14px;
		font-family:'Open Sans', sans-serif ;
		color: rgb(38,38,38);
    }
	a {
		text-decoration: none;
	}
`;
