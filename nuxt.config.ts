// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	googleFonts: {
		families: {
			Inter: true,
			download: true,
			inject: true,
		},
	},
});
