<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '@unocss/reset/tailwind.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main>
	<Navbar user={data.user} />
	<div class="flex flex-row">
		<Sidebar />
		<div>
			<slot />
		</div>
	</div>
</main>
