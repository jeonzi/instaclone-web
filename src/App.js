import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar, isLoggedInVar } from "./apollo";
import Layout from "./components/Layout";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const darkMode = useReactiveVar(darkModeVar);
	return (
		<ApolloProvider client={client}>
			<HelmetProvider>
				<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
					<GlobalStyles />
					<Router>
						<Routes>
							<Route
								exact
								path={routes.home}
								element={
									isLoggedIn ? (
										<Layout>
											<Home />
										</Layout>
									) : (
										<Login />
									)
								}
							/>
							<Route
								path={routes.signUp}
								element={!isLoggedIn ? <SignUp /> : null}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Router>
				</ThemeProvider>
			</HelmetProvider>
		</ApolloProvider>
	);
}

export default App;
