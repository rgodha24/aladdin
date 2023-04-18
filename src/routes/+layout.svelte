<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import "@unocss/reset/tailwind.css"
</script>

<main>
	<Navbar />
	<div class="flex flex-row">
		<Sidebar />
		<div>
			<slot />
		</div>
	</div>
</main>
