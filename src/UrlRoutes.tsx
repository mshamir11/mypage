import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CommunityRides } from "./pages/designs/CommunityRides";
import { Designs } from "./pages/Designs";

export const UrlRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/designs" element={<Designs />}></Route>
			<Route path="/designs/community-rides" element={<CommunityRides />}></Route>
		</Routes>
	);
};
