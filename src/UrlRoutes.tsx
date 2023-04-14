import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DesignsMain } from "./pages/DesignsMain";

export const UrlRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/designs" element={<DesignsMain />}></Route>
		</Routes>
	);
};
