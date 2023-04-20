import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import { presetWind, transformerDirectives } from 'unocss';

export default defineConfig({
	plugins: [
		unocss({
			presets: [presetWind(), transformerDirectives()],
			mode: 'svelte-scoped'
		}),
		sveltekit()
	]
});
