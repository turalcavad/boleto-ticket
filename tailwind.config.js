const { root } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
		},
		container: {
			center: true,
			screens: {
				sm: "540px",
				md: "720px",
				lg: "890px",
				xxl: "1140px",
			},
			padding: "0 15px",
		},
		extend: {
			colors: {
				mainColor: "#31d7a9",
				mainTextColor: "#e9eeff",
				secondaryTextColor: "#dbe2fb",
				btnColor: "#5560ff",
				secondaryBtnColor: "#aa52a1",
				thirdBtnColor: "#ff4343",
				borderColor: "rgba(255, 255, 255, 0.102)",
				dashedBorder: "#11326f",
				movieCardBg: "#032055",
				before: "#31d7a9",
				bannerBg: "rgba(0, 18, 50, 0.4)",
				boxShadow: "rgb(59, 55, 188 ,0.5)",
			},

			backgroundImage: {
				"hero-pattern": "url('/src/assets/images/banner/banner01.jpg')",
				"search-bg": "url('/src/assets/images/ticket/ticket-bg01.jpg')",
			},
		},
	},
	plugins: [],
};
