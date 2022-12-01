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
				sm: "600px",
				md: "728px",
				lg: "984px",
				xxl: "1240px",
			},
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
				before: "#31d7a9",
				bannerBg: "rgba(0, 18, 50, 0.4)",
				boxShadow: "rgb(59, 55, 188 ,0.5)",
			},

			backgroundImage: {
				"hero-pattern": "url('/src/assets/images/banner/banner01.jpg')",
				"footer-texture": "url('/img/footer-texture.png')",
			},
		},
	},
	plugins: [],
};
