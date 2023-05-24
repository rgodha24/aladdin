<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<Toast />
	<Sidebar slot="sidebarLeft" />
	<slot />
</AppShell>
