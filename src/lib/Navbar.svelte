<script lang="ts">
	import type { User } from 'lucia-auth';

	export let user: User | null | undefined;
</script>

{#if !!user}
	<div class="flex flex-row justify-between">
		<p>Logged in as {user.username}</p>
		<form action="/logout" method="post">
			<button type="submit">Log out</button>
		</form>
	</div>
{:else}
	<a href="/login">Login</a>
	<a href="/signup">Signup</a>
{/if}
