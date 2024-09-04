import daisytheme from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./**/*.{html,go}"],
	theme: {
		extend: {
			spacing: {
				logo: "6rem",
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				ess: {
					...daisytheme["light"],
					primary: "#E88419",
					secondary: "#ff931e",
					info: "#de7a0f",
				},
			},
		],
	},
};
