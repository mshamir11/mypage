import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageCarousel = () => {
	return (
		<Carousel>
			<div>
				<img src={process.env.PUBLIC_URL + "/website_mock_desktop.png"} />
			</div>
			<div>
				<img src={process.env.PUBLIC_URL + "/website_mock_desktop.png"} />
			</div>
		</Carousel>
	);
};
