<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import FormItem from '$lib/FormItem.svelte';
	import Button from '$lib/Button.svelte';

	export let data: PageData;
	const { form, errors, constraints, enhance, submitting } = superForm(data.form);
</script>

<form use:enhance method="post">
	<FormItem {form} {errors} {constraints} name="name" label="Location Name" />
	<Button type="submit">create</Button>
</form>
