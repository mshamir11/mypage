import { Link } from "react-router-dom";
import { Image } from "../interfaces/DesignInterfaces";

// @TODO : Fix hovering effect for small screen devices
// @TODO : Fix all cards having same size
export const DesignCard = ({ image_src, card_title, main_title, description, route_url }: Image) => {
	return (
		<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
			<img src={image_src} className="object-cover w-full h-64" alt="" />
			<div className="p-5 border border-t-0">
				<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
					<a
						href="/"
						className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
						aria-label="Category"
						title={card_title}
					>
						{card_title}
					</a>

					<span className="text-gray-600">— 28 Dec 2020</span>
				</p>
				<Link to={route_url}>
					<a
						href="/"
						aria-label="Category"
						title={main_title}
						className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
					>
						{main_title}
					</a>
				</Link>
				<p className="mb-2 text-gray-700">{description}</p>
				<a
					href="/"
					aria-label=""
					className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
				>
					Learn more
				</a>
			</div>
		</div>
	);
};
