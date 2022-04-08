import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

const lightTheme = {
	fontColor: "#2c2c2c",
	bgColor: "lightgray",
};

const darkTheme = {
	fontColor: "lightgray",
	bgColor: "#2c2c2c",
};

function App() {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const darkMode = useReactiveVar(darkModeVar);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Router>
				<Routes>
					<Route
						exact
						path="/home"
						element={isLoggedIn ? <Home /> : <Login />}
					></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
