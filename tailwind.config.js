/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-theme-digit": "#888E97",
				"dark-theme-ac": "#BFC8D3",
				blue: "#0D28C7",
				"light-theme-digit": "#6B7177",
				"light-theme-ac": "#A2A8AE",
			},
			gridTemplateColumns: {
				"col-4": "repeat(4, minmax(0, 150px))",
			},
		},
	},
	plugins: [],
};
