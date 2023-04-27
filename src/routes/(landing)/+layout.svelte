<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<Navbar slot="header" />
	<slot />
</AppShell>

<style>
	:root {
		--tw-space-y-reverse: 0;
	}
</style>
