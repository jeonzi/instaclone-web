import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import { FatLink } from "../components/common";

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Subtitle = styled(FatLink)`
	font-size: 16px;
	text-align: center;
	margin-top: 10px;
`;

const FacebookLogin = styled.div`
	border: none;
	border-radius: 3px;
	margin-top: 12px;
	background-color: #0095f6;
	color: white;
	text-align: center;
	padding: 8px 0px;
	font-weight: 600;
	width: 100%;
	span {
		margin-left: 10px;
		font-weight: 600;
	}
`;

function SignUp() {
	return (
		<AuthLayout>
			<FormBox>
				<HeaderContainer>
					<FontAwesomeIcon icon={faInstagram} size="3x" />
					<Subtitle>
						Sign up to see photos and videos from your friends.
					</Subtitle>
					<FacebookLogin>
						<FontAwesomeIcon icon={faFacebookSquare} />
						<span>Log in with Facebook</span>
					</FacebookLogin>
				</HeaderContainer>
				<Separator />
				<form>
					<Input type="text" placeholder="Name" />
					<Input type="text" placeholder="Email" />
					<Input type="text" placeholder="Username" />
					<Input type="password" placeholder="Password" />
					<Button type="submit" value="Sign Up" />
				</form>
			</FormBox>
			<BottomBox
				cta="Have an account?"
				link={routes.home}
				linkText="Log in"
			/>
		</AuthLayout>
	);
}
export default SignUp;
