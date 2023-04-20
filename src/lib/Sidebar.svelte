<script lang="ts">
	import type { User } from 'lucia-auth';

	export let user: User;
</script>

<div class="w-30% bg-red-200 h-100vh flex flex-col">
	{#if !!user}
		<div class="flex flex-row justify-between">
			<p>Logged in as {user.username}</p>
			<form action="/logout" method="post">
				<button type="submit">Log out</button>
			</form>
		</div>
	{:else}{/if}
</div>
