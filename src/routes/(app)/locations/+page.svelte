<script lang="ts">
	import type { PageData } from './$types';
	import Location from '$lib/Location.svelte';

	export let data: PageData;
</script>

<div class="flex flex-row">
	{#each data.locations as location (location.id)}
		<Location {location} />
	{/each}
</div>

<a href="/locations/create"> Create a new location </a>
