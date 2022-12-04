import SearchIcon from "@mui/icons-material/Search";

const MovieSearch = () => {
	return (
		<div className="relative py-10 px-8 bg-white bg-search-bg before bg-center bg-cover before-bg">
			<div className="flex flex-col items-center">
				<h6 className="uppercase text-mainColor font-semibold tracking-wide">
					Welcome to beloto
				</h6>
				<h3 className="uppercase text-white tracking-wide">
					What are you looking for
				</h3>
			</div>

			<div className="mt-14 p-7 relative before:content-[''] before:bg-black before:absolute before:opacity-40 before:top-0 before:left-0 before:w-full before:h-[calc(100%+1px)]">
				<form className="relative flex justify-between items-center">
					<input
						type="text"
						className="w-full p-3 bg-transparent outline-none text-white"
						placeholder="Search for Movies"
					/>
					<div className="text-white cursor-pointer">
						<SearchIcon color="inherit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default MovieSearch;
