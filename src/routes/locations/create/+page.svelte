<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form use:enhance>
	<input name="name" type="text" placeholder="location name" />
	<button type="submit">create</button>
</form>

{#if form?.success}
	<p>successfully created location!</p>
{:else if form?.success === false}
	<p>failed to create location {form.name}</p>
{/if}
