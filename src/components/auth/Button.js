import styled from "styled-components";

const Button = styled.input`
	border: none;
	border-radius: 3px;
	margin-top: 12px;
	background-color: #0095f6;
	color: white;
	text-align: center;
	padding: 8px 0px;
	font-weight: 600;
	width: 100%;
	opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

export default Button;
