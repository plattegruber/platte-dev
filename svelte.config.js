import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
        extensions: ['.svelte', ...mdsvexConfig.extensions],

        kit: {
                adapter: adapter()
        },

        preprocess: [mdsvex(mdsvexConfig), preprocess({ postcss: true })]
};

export default config;
