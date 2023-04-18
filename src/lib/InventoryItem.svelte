<script lang="ts">
	import type { Item } from '@prisma/client';
	import { decrementItem, incrementItem } from './client/itemActions';

	export let item: Item;
</script>

<img src={item.imgUrl} alt={'An image of the item' + item.name} />
<h3>{item.name}</h3>
<button type="button" on:click={() => incrementItem(item.id)}>+</button>
<button type="button" on:click={() => decrementItem(item.id)}>-</button>
