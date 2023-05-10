<script lang="ts">
	import type { PageData } from './$types';
	import InventoryItem from '$lib/InventoryItem.svelte';
	import FormItem from '$lib/FormItem.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { InputChip } from '@skeletonlabs/skeleton';
	import Button from '$lib/Button.svelte';

	export let data: PageData;
	$: inventory = data.location.inventory;
	const {
		form: newItemForm,
		enhance,
		submitting,
		...newItem
	} = superForm(data.newItem, {
		resetForm: true
	});
</script>

<div class="grid grid-cols-4">
	{#each inventory as item (item.id)}
		<InventoryItem {item} />
	{/each}
</div>
<form use:enhance method="post" action="?/newItem">
	<FormItem
		form={newItemForm}
		errors={newItem.errors}
		constraints={newItem.constraints}
		name="name"
		label="item name"
	/>
	<FormItem
		form={newItemForm}
		errors={newItem.errors}
		constraints={newItem.constraints}
		name="imgUrl"
		label="url of an image to use"
	/>
	<FormItem
		form={newItemForm}
		errors={newItem.errors}
		constraints={newItem.constraints}
		name="barcode"
		type="number"
		label="the number from the items barcode"
	/>
	<InputChip bind:value={$newItemForm.tags} name="tags" />
	<Button loading={$submitting} type="submit" variant="primary">Submit</Button>
</form>
