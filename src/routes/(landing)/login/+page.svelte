<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import FormItem from '$lib/FormItem.svelte';
	import Button from '$lib/Button.svelte';

	export let data: PageData;

	const { form, errors, constraints, enhance } = superForm(data.signInForm);
</script>

<form
	on:submit={() => {
		console.log('submitting');
	}}
	use:enhance
	method="POST"
>
	<FormItem {form} {errors} {constraints} name="username" label="Email" />
	<FormItem {form} {errors} {constraints} name="password" label="Password" type="password" />
	<Button type="submit">Sign in</Button>
</form>
