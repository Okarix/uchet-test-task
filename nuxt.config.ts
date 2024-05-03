// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@pinia/nuxt'],
	css: ['~/assets/css/main.css'],
	pinia: {
		storesDirs: ['./stores/**', './custom-folder/stores/**'],
	},
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
