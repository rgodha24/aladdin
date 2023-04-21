<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import FormItem from '$lib/FormItem.svelte';
	import Button from '$lib/Button.svelte';

	export let data: PageData;

	const { form, errors, constraints, enhance, submitting } = superForm(data.form);
</script>

<form method="post" use:enhance>
	<FormItem {form} {errors} {constraints} name="username" label="Email" />
	<FormItem {form} {errors} {constraints} name="password" label="Password" type="password" />
	<FormItem
		{form}
		{errors}
		{constraints}
		name="passwordConfirm"
		label="Confirm Password"
		type="password"
	/>
	<Button type="submit" loading={$submitting}>Signup</Button>
</form>
