<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-row">
	<Sidebar user={data.user} />
	<div>
		<slot />
	</div>
</div>
