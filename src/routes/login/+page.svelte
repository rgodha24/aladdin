<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form
	on:submit={() => {
		console.log('submitting');
	}}
	method="POST"
>
	<label for="username">username</label>
	<input type="username" name="username" id="username" />
	<label for="password">Password</label>
	<input type="password" name="password" id="password" />
	<button type="submit">Login</button>
</form>

{#if form?.success === true}
	<p>Success!</p>
{:else if form?.success === false}
	<p>Failed!</p>
	{form.password?.[0]}
	{form.username?.[0]}
{/if}
