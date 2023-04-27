<script lang="ts">
	import type { PageData } from './$types';
	import Location from '$lib/Location.svelte';

	export let data: PageData;
</script>

<div class="m-auto max-w-lg">
	<h2 class="my-4 text-6xl text-center">Locations</h2>
	<nav class="text-4xl text-center list-nav">
		<ul class="min-w-[150px]">
			{#each data.locations as location (location.id)}
				<Location {location} />
			{/each}
		</ul>
	</nav>
</div>
<div class="flex flex-row justify-center mt-8">
	<a href="/locations/create" class="btn variant-filled-primary"> Create a new location </a>
</div>
