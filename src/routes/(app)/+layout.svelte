<script lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import '@unocss/reset/tailwind.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="flex flex-row">
	<Sidebar user={data.user} />
	<div>
		<slot />
	</div>
</main>
