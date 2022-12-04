import { Link } from "react-router-dom";
import { MainButton } from "../button";
import classes from "./header.module.css";

const Header = () => {
	return (
		<header className="border-b-2 border-b-borderColor fixed top-0 left-0 z-50 w-full">
			<div className="container mx-auto py-6 flex items-center justify-between">
				<Link to={"/"}>
					<img
						src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"
						alt="Logo"
					/>
				</Link>

				<nav className="space-x-4 text-mainTextColor hidden lg:block text-sm xxl:text-base font-semibold border-b-borderColor">
					<Link className={classes.hover} to={"/"}>
						HOME
					</Link>
					<Link className={classes.hover} to={"/"}>
						MOVIES
					</Link>
					<Link className={classes.hover} to={"/"}>
						ABOUT US
					</Link>
					<Link className={classes.hover} to={"/"}>
						CONTACT
					</Link>
					<Link className={classes.hover} to={"/"}>
						SIGN IN
					</Link>

					<MainButton id="0" active={true} title="JOIN US"></MainButton>
				</nav>
			</div>
		</header>
	);
};

export default Header;
