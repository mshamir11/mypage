import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	const [url, setUrl] = useState<String | null>(null);
	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	return (
		<nav className="bg-white shadow">
			<div className="container flex items-center justify-center mx-auto text-gray-600 mb-2">
				<Link to="/" className={"navbar-style " + (url === "/" ? "border-blue-500" : "border-transparent")}>
					Home
				</Link>
				<Link
					to="/designs"
					className={"navbar-style " + (url === "/designs" ? " border-blue-500" : "border-transparent")}
				>
					System Designs
				</Link>
				<Link to="/blogs" className={"navbar-style " + (url === "/blogs" ? " border-blue-500" : "border-transparent")}>
					Blogs
				</Link>
			</div>
		</nav>
	);
};
