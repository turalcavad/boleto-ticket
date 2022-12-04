import React from "react";
import { MainButton } from "../button";
import { useState } from "react";

const MovieTab: React.FC = () => {
	const [active, setActive] = useState("1");

	const activeButtonHandler = (e: any) => {
		setActive(e.target.id);
	};

	return (
		<ul className="flex flex-wrap items-center justify-center space-x-3">
			<li className="mb-4 cursor-pointer" onClick={activeButtonHandler}>
				<MainButton
					id="1"
					active={active === "1" ? true : false}
					title="Now Showing"
				/>
			</li>
			<li className="mb-4 cursor-pointer" onClick={activeButtonHandler}>
				<MainButton
					id="2"
					active={active === "2" ? true : false}
					title="Coming soon"
				/>
			</li>
			<li className="mb-4 cursor-pointer" onClick={activeButtonHandler}>
				<MainButton
					id="3"
					active={active === "3" ? true : false}
					title="Exclusive"
				/>
			</li>
		</ul>
	);
};

export default MovieTab;
