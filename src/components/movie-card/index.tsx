import React from "react";

const MovieCard: React.FC = () => {
	return (
		<div className="flex flex-col">
			<a href="#">
				<img
					src="https://pixner.net/boleto/demo/assets/images/movie/movie04.jpg"
					alt="Movie Poster"
				/>
			</a>

			<div className="px-4 bg-movieCardBg">
				<h5 className="py-6  border-b-[1px] border-dashed border-b-dashedBorder">
					<a href="#">Movie</a>
				</h5>
				<div className="py-6 flex">
					<div className="flex items-center space-x-3">
						<img
							src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png"
							alt=""
						/>
						<span className="text-white">88%</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
