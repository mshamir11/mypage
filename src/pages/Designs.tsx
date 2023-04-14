import { DesignCard } from "../components/DesignCard";
import { image1, image2, image3 } from "../data/DesignData";

export const Designs = () => {
	return (
		<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="flex flex-col mb-5">
				<h1 data-testid="design-title" className="flex text-4xl  justify-center mb-2">
					Designs{" "}
				</h1>
				<p className="flex justify-center">Please find below all the designs that i have created so far</p>
			</div>

			<div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
				<DesignCard {...image1} />
				<DesignCard {...image2} />
				<DesignCard {...image3} />
			</div>
		</div>
	);
};
