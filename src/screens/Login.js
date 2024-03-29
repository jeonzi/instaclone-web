import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useLocation } from "react-router-dom";

const FacebookLogin = styled.div`
	color: #385285;
	span {
		margin-left: 10px;
		font-weight: 600;
	}
`;

const Notification = styled.div`
	color: #2ecc71;
`;

const LOGIN_MUTATION = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			ok
			token
			error
		}
	}
`;

function Login() {
	const location = useLocation();
	console.log(location);
	const {
		register,
		handleSubmit,
		formState,
		getValues,
		setError,
		clearErrors,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			username: location?.state?.username || "",
			password: location?.station?.password || "",
		},
	}); //useState, setvalue, onchange를 모두 다 해줌
	const onCompleted = (data) => {
		const {
			login: { ok, error, token },
		} = data;
		if (!ok) {
			return setError("result", {
				message: error,
			});
		}
		if (token) {
			logUserIn(token);
		}
	};
	const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });
	const onSubmitValid = (data) => {
		const { username, password } = getValues();
		if (loading) {
			return;
		}
		login({
			variables: { username, password },
		});
	};

	const clearLoginError = () => {
		clearErrors("result");
	};

	return (
		<AuthLayout>
			<PageTitle title="Login" />
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram} size="3x" />
				</div>
				<Notification>{location?.state?.message}</Notification>
				<form onSubmit={handleSubmit(onSubmitValid)}>
					<Input
						{...register("username", {
							required: "Username is required",
							minLength: {
								value: 5,
								message: "Username should be longer than 5 chars.",
							},
							pattern: {
								message: "5~15자의 영문과 숫자만 사용 가능합니다.",
								value: /^[a-z0-9]{1,15}$/g,
							},
							onChange() {
								clearLoginError();
							},
						})}
						type="text"
						placeholder="Username"
						hasError={Boolean(formState.errors?.username?.message)}
					/>
					<FormError message={formState.errors?.username?.message} />
					<Input
						{...register("password", {
							required: "Password is required.",
							onChange() {
								clearErrors("result");
							},
						})}
						type="password"
						placeholder="Password"
						hasError={Boolean(formState.errors?.password?.message)}
					/>
					<FormError message={formState.errors?.password?.message} />
					<Button
						type="submit"
						value={loading ? "Loading..." : "Log in"}
						disabled={!formState.isValid || loading}
					/>
					<FormError message={formState.errors?.result?.message} />
				</form>
				<Separator />
				<FacebookLogin>
					<FontAwesomeIcon icon={faFacebookSquare} />
					<span>Log in with Facebook</span>
				</FacebookLogin>
			</FormBox>
			<BottomBox
				cta="Don't have an account?"
				link={routes.signUp}
				linkText="Sign up"
			/>
		</AuthLayout>
	);
}
export default Login;
