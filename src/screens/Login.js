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

const FacebookLogin = styled.div`
	color: #385285;
	span {
		margin-left: 10px;
		font-weight: 600;
	}
`;

function Login() {
	const { register, handleSubmit } = useForm(); //useState, setvalue, onchange를 모두 다 해줌
	const onSubmitValid = (data) => {
		console.log(data);
	};
	const onSubmitInvalid = (data) => {
		console.log(data, "invalid");
	};
	return (
		<AuthLayout>
			<PageTitle title="Login" />
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram} size="3x" />
				</div>
				<form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
					<Input
						{...register("username", {
							required: "Username is required",
							minLength: 5,
							pattern: {
								message: "5~15자의 영문과 숫자만 사용 가능합니다.",
								value: /^[a-z0-9]{1,15}$/g,
							},
						})}
						type="text"
						placeholder="Username"
					/>
					<Input
						{...register("password")}
						type="password"
						placeholder="Password"
					/>
					<Button type="submit" value="Log in" />
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
