import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

const Title = styled.h1`
	color: greenyellow;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Container = styled.div`
	background-color: yellow;
`;

function Login() {
	return (
		<Container>
			<Title>Login</Title>
			<button onClick={() => isLoggedInVar(true)}>Log in now!</button>
		</Container>
	);
}
export default Login;
