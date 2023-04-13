import { Image } from "../Interfaces/DesignInterfaces";

// @TODO : Fix hovering effect for small screen devices
export const DesignCard = ({ image_src, card_title, main_title, description }: Image) => {
	return (
		<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
			<img src={image_src} className="object-cover w-full h-64" alt="" />
			<div className="p-5 border border-t-0">
				<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
					<a
						href="/"
						className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
						aria-label="Category"
						title="traveling"
					>
						{card_title}
					</a>
					<span className="text-gray-600">— 28 Dec 2020</span>
				</p>
				<a
					href="/"
					aria-label="Category"
					title="Visit the East"
					className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
				>
					{main_title}
				</a>
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
