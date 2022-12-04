import { MainButton } from "../../components/button";
import Layout from "../../components/layout";
import MovieCard from "../../components/movie-card";
import MovieSearch from "../../components/movie-search";
import MovieTab from "../../components/movie-tab";

const Home = () => {
	return (
		<Layout>
			{/* first section */}
			<section className="pt-60 pb-[400px]">
				<div className="bg-hero-pattern absolute top-0 left-0 bottom-0 right-0  bg-cover bg-center bg-fixed opacity-30 before:bg-bannerBg before:z-10"></div>

				<div className="container">
					<div className="relative mx-auto text-center text-white z-20">
						<h1 className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4">
							<span className="block p-7">BOOK YOUR</span>
							TICKETS FOR MOVIE
						</h1>
						<p className="text-xl">
							Safe, secure, reliable ticketing. Your ticket to live
							entertainment!
						</p>
					</div>
				</div>
			</section>
			{/* first section */}

			{/* second section */}
			<section className="container -mt-80">
				<MovieSearch></MovieSearch>
			</section>

			<section className="container py-28">
				<div className="flex justify-between mb-14">
					<div>
						<h2 className="uppercase text-white font-bold">Movies</h2>
						<p className="">Be sure not to miss these Movies today.</p>
					</div>

					<MovieTab />
				</div>
				<div className="py-6 flex columns-4 space-x-12">
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</div>
			</section>
		</Layout>
	);
};

export default Home;
