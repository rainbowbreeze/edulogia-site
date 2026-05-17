/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				navy: '#1e3a8a', // Deep Navy Blue
				accent: '#fbbf24', // Playful Yellow
				background: '#f4f4f5', // Light grey for a clean look
			},
			fontFamily: {
				sans: ['Atkinson', 'sans-serif'], // Professional but accessible
			},
		},
	},
	plugins: [],
}