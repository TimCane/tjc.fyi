/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/basecamp/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			transparent: "var(--transparent)",
			inherit: "inherit",
			white: "var(--white)",
			background: "var(--background)",
			foreground: "var(--foreground)",
		},
		extend: {
			fontFamily: {
				mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
			},

		},
	},
	plugins: [],
}
