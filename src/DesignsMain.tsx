import { Designs } from "./Designs";
import { Navbar } from "./Navbar";

// @TODO : This can be combined with Designs.tsx.
export const DesignsMain = () => {
	return (
		<div>
			<Navbar />
			<Designs />
		</div>
	);
};
