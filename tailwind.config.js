/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				mainColor: "#31d7a9",
				mainTextColor: "#e9eeff",
				secondaryTextColor: "#dbe2fb",
			},
		},
	},
	plugins: [],
};
