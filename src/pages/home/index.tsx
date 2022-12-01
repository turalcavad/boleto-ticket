import Layout from "../../components/layout";

const Home = () => {
	return (
		<Layout>
			<div className="pt-60 pb-80">
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
			</div>
		</Layout>
	);
};

export default Home;
