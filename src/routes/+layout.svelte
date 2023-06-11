<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
</script>

<slot />
<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>
