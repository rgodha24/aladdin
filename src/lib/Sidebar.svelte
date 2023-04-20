<script lang="ts">
	import type { User } from 'lucia-auth';
	import Button from './Button.svelte';

	export let user: User;
	const links = [['locations', 'Locations']] satisfies [string, string][];

	// TODO: make it pop in and out with a button
</script>

<div class="w-15% bg-blue-900 h-100vh flex flex-col justify-between">
	<div class="flex flex-col gap-4 ml-5">
		{#each links as [href, name]}
			<a {href}>
				{name}
			</a>
		{/each}
	</div>
	{#if !!user}
		<div class="flex flex-row justify-between ml-5 flex-end">
			<form action="/logout" method="post">
				<Button type="submit" variant="danger">Sign Out</Button>
			</form>
		</div>
	{/if}
</div>
