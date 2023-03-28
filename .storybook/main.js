// .storybook/main.js
module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	core: {
		builder: 'webpack5'
	},
	webpackFinal: async (config) => {
		const svelteLoader = config.module.rules.find(
			(r) => r.loader && r.loader.includes('svelte-loader')
		);
		svelteLoader.options.compilerOptions = { css: false };
		svelteLoader.options.preprocess = require('svelte-preprocess')({
			sourceMap: !config.mode === 'production',
			scss: {
				prependData: '@import "src/styles/variables.css";'
			}
		});
		return config;
	}
};
