import "./App.css";
import { DesignsMain } from "./DesignsMain";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

// @TODO - Cleanup unused imports
function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/designs" element={<DesignsMain />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
