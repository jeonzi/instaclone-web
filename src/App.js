import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						exact
						path="/home"
						element={
							isLoggedIn ? (
								<Home setIsLoggedIn={setIsLoggedIn} />
							) : (
								<Login setIsLoggedIn={setIsLoggedIn} />
							)
						}
					></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
