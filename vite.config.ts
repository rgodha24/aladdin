import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			crypto: 'crypto-browserify'
		}
	},
	optimizeDeps: {
		esbuildOptions: {
			alias: {
				crypto: 'crypto-browserify'
			}
		}
	}
});
