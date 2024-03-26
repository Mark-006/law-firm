/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#166432",
				secondary: "#092415",
				text_color: "#B17030",
				btn_color: "#815223",
			},
		},
	},
	plugins: [],
};
