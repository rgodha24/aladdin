<script lang="ts">
	import '@unocss/reset/tailwind.css';
</script>

	<slot />

<style>
	:global(body) {
		@apply bg-slate-900 text-white text-xl;
	}
</style>
