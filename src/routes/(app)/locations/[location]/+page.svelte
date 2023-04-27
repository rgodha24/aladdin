<script lang="ts">
	import type { PageData } from './$types';
	import InventoryItem from '$lib/InventoryItem.svelte';

	export let data: PageData;
	$: inventory = data.location.inventory;
</script>



{#each inventory as item (item.id)}
	<InventoryItem {item} />
{/each}
