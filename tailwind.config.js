/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Josefin Sans", "sans-serif"],
				alata: ["Alata"],
			},
		},
	},
	plugins: [],
};
