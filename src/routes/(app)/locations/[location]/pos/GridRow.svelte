<script lang="ts">
	import { barcode } from './barcode';

	export let nums: number[];
</script>

<div class="flex flex-row gap-8">
	{#each nums as num}
		<button
			class="p-4 bg-red-500"
			on:click={() => {
				$barcode = $barcode * 10 + num;
			}}
		>
			{num}
		</button>
	{/each}
</div>
