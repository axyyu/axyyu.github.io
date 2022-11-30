/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cloud: '#edf2f4',
				ink: '#00171f',
				orange: '#f12711',
				yellow: '#f5af19',
				darkblue: '#021B79',
				blue: '#0575E6',
				// projects
				glimmr: '#a951e8',
				precisely: '#e71f54',
				everest: '#173753',
				discover: '#3273dc'
			}
		}
	},
	plugins: []
};
