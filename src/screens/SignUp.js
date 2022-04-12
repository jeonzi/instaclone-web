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
import { FatLink } from "../components/commonStyles";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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

const CREATE_ACCOUNT_MUTATION = gql`
	mutation createAccount(
		$firstName: String!
		$lastName: String
		$email: String!
		$username: String!
		$password: String!
	) {
		createAccount(
			firstName: $firstName
			lastName: $lastName
			email: $email
			username: $username
			password: $password
		) {
			ok
			error
		}
	}
`;

function SignUp() {
	const navigate = useNavigate(); // useHistory -> useNavigate(react-router-dom ver6)
	const onCompleted = (data) => {
		const { username, password } = getValues();
		const {
			createAccount: { ok },
		} = data;
		if (!ok) {
			return;
		}
		navigate(routes.home, {
			message: "Account created. Please log in. ",
			username,
			password,
		});
	};
	const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
		onCompleted,
	});
	const { register, handleSubmit, formState, getValues } = useForm({
		mode: "onChange",
	});
	const onSubmitValid = (data) => {
		if (loading) {
			return;
		}
		createAccount({
			variables: {
				...data,
			},
		});
	};
	return (
		<AuthLayout>
			<PageTitle title="Sign up" />
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
				<form onSubmit={handleSubmit(onSubmitValid)}>
					<Input
						{...register("firstName", { required: true })}
						type="text"
						placeholder="First Name"
					/>
					<FormError message={formState.errors?.firstName?.message} />
					<Input
						{...register("lastName")}
						type="text"
						placeholder="Last Name"
					/>
					<Input
						{...register("email", {
							required: "First Name is required.",
						})}
						type="text"
						placeholder="Email"
					/>
					<FormError message={formState.errors?.email?.message} />
					<Input
						{...register("username", {
							required: "Username is required.",
						})}
						type="text"
						placeholder="Username"
					/>
					<FormError message={formState.errors?.username?.message} />
					<Input
						{...register("password", {
							required: "Password is required.",
						})}
						type="password"
						placeholder="Password"
					/>
					<FormError message={formState.errors?.password?.message} />
					<Button
						type="submit"
						value={loading ? "Loading..." : "Sign Up"}
						disabled={!formState.isValid || loading}
					/>
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
