<script lang="ts">
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import GridRow from './GridRow.svelte';
	import { barcode } from './barcode';
	import Button from '$lib/Button.svelte';

	let selected_items: { barcode: number; price: number; qty: number; name: string }[] = [];

	$: total = selected_items.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

	export let data: PageData;

	function handleBarcodeSubmit() {
		console.log('handleBarcodeSubmit', typeof $barcode);
		const item = data.location.inventory.find((item) => item.barcode === $barcode);
		console.log(item);
		if (item) {
			$barcode = 0;
			const existing_item = selected_items.find((i) => i.barcode === item.barcode);
			if (existing_item) {
				existing_item.qty++;
			} else {
				selected_items.push({ barcode: item.barcode, price: item.price, qty: 1, name: item.name });
				// svelte moment
				selected_items = selected_items;
			}
			toastStore.trigger({
				background: 'bg-green-700',
				message: `Added ${item.name} to cart`
			});
		} else {
			toastStore.trigger({
				background: 'bg-red-700',
				message: `Item with barcode ${$barcode} not found`
			});
		}
	}

	$: console.log($toastStore);
	$: console.log(data.location.inventory);
	$: console.log('selected items', selected_items);
</script>

<main class="flex flex-row mt-4 h-full">
	<div class="w-1/2">
		<h1 class="mx-auto text-5xl text-center">Cart</h1>
		{#each selected_items as item}
			<div class="flex flex-row justify-between">
				<!-- TODO: not h3 -->
				<h3 class="text-3xl">{item.name}</h3>
				<h3 class="text-3xl">{item.qty}x</h3>
				<h3 class="text-3xl">{item.price}</h3>
				<h3 class="text-3xl">{item.price * item.qty}</h3>
			</div>
		{/each}

		<h3 class="mx-auto text-5xl text-center">Total: ${total}</h3>
	</div>
	<div class="w-1/2">
		<input class="mx-auto text-black" type="number" bind:value={$barcode} />
		<div class="flex flex-col gap-4">
			<GridRow nums={[1, 2, 3]} />
			<GridRow nums={[4, 5, 6]} />
			<GridRow nums={[7, 8, 9]} />
			<GridRow nums={[0]} />
			<Button onClick={handleBarcodeSubmit}>Submit</Button>
		</div>
	</div>
</main>
