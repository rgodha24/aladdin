<script lang="ts">
	import type { Item } from '@prisma/client';
	import { decrementItem, incrementItem } from './client/itemActions';

	export let item: Item;
</script>

<div class="flex flex-col p-4 border-black border-3">
	<img src={item.imgUrl} alt={'An image of the item' + item.name} />
	<div class="flex flex-row gap-4 justify-center">
		<button type="button" on:click={() => incrementItem(item.id)}>+</button>
		<h3>{item.name}: {item.quantity}</h3>
		<button type="button" on:click={() => decrementItem(item.id)}>-</button>
	</div>
	<p class="text-center">barcode: {item.barcode}</p>
	<p class="text-center">price: {item.price}</p>
</div>
