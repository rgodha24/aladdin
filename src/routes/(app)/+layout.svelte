<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<Sidebar slot="sidebarLeft" />
	<slot />
</AppShell>
