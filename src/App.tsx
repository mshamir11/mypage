import "./App.css";
import { Blogs } from "./Blogs";
import { Designs } from "./Designs";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/blogs" element={<Blogs />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
