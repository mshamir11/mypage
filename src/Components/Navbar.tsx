export const Navbar = () => {
	return (
		<nav className="bg-white shadow dark:bg-gray-800">
			<div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
				<a
					href=""
					className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
				>
					home
				</a>
				<a href="" className="navbar-style">
					features
				</a>
				<a href="" className="navbar-style">
					pricing
				</a>
				<a href="" className="navbar-style">
					blog
				</a>
			</div>
		</nav>
	);
};
