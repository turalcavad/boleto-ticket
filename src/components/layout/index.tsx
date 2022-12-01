import React from "react";
import Header from "../header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Header></Header>
			{children}
		</>
	);
};

export default Layout;
