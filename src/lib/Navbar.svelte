<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar class="w-full" gridColumns="grid-cols-2" slotTrail="place-content-end">
	<a href="/"><h1 class="">Aladdin POS</h1></a>
	<svelte:fragment slot="trail">
		<a href="/login" class="btn variant-filled-secondary">Login</a>
		<a href="/signup" class="btn variant-filled-primary">Signup</a>
	</svelte:fragment>
</AppBar>
