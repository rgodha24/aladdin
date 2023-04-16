<script lang="ts">
	import type { PageData } from './$types';
	export let page: PageData;
</script>

{#each page.locations as location}
	<div class="location">
		<h2>{location.name}</h2>
	</div>
{/each}
