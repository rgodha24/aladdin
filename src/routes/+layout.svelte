<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<main>
	<Navbar />
	<div class="flex flex-row">
		<Sidebar />
		<slot />
	</div>
</main>
