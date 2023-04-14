import "./App.css";
import { UrlRoutes } from "./UrlRoutes";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<UrlRoutes />
		</div>
	);
}

export default App;
