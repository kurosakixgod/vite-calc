/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-digit": "#fff",
				"light-blue": "#38B9FF",
				"light-operation": "#ADE2FF",
				"light-operation-blue": "#109DFF",
				"light-main": "#F7F8FB",
				"light-operation-hover": "#19ACFF",
				"light-digit-hover": "#f9f9f9",
				"dark-digit": "#303136",
				"dark-digit-blue": "#29A8FF",
				"dark-operation": "#005DB2",
				"dark-operation-blue": "#24A5FF",
				"dark-main": "#17181A",
				"dark-color": "#424242",
				"dark-operation-hover": "#1991FF",
				"dark-digit-hover": "#42434a",
			},
			gridTemplateColumns: {
				"col-4": "repeat(4, minmax(0, 150px))",
			},
		},
	},
	plugins: [],
};
