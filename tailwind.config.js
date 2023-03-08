/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				work: ["Work Sans", "sans-serif"],
			},
			boxShadow: {
				top: "0px -18px 100px 48px rgba(24, 24, 27, 1)",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
