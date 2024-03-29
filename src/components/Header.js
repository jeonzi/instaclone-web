import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import routes from "../routes";
import useUser from "../hooks/useUser";

const SHeader = styled.header`
	width: 100%;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	background-color: ${(props) => props.theme.bgColor};
	padding: 18px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	max-width: 930px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Column = styled.div``;

const Icon = styled.span`
	margin-left: 15px;
`;

const Btn = styled.span`
	background-color: ${(props) => props.theme.accentColor};
	border-radius: 4px;
	padding: 4px 15px;
	color: white;
	font-weight: 600;
`;

const Button = styled.span`
	background-color: ${(props) => props.theme.accentColor};
	border-radius: 4px;
	padding: 4px 15px;
	color: white;
	font-weight: 600;
`;

function Header() {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const loggedInUser = useUser();
	return (
		<SHeader>
			<Wrapper>
				<Column>
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</Column>
				<Column>
					{isLoggedIn ? (
						<>
							<Icon>
								<FontAwesomeIcon icon={faHome} size="lg" />
							</Icon>
							<Icon>
								<FontAwesomeIcon icon={faCompass} size="lg" />
							</Icon>
							<Icon>
								<FontAwesomeIcon icon={faUser} size="lg" />
							</Icon>
						</>
					) : (
						<Link href={routes.home}>
							<Button>Login</Button>
						</Link>
					)}
				</Column>
			</Wrapper>
		</SHeader>
	);
}

export default Header;
