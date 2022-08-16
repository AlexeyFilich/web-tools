import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV !== 'production';
console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            pages: 'docs/',
            assets: 'docs/'
        }),
        paths: {
            base: dev ? '' : '/web-tools',
        },
        prerender: {
            default: true
        }
    }
};

export default config;
