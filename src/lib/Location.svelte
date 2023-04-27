<script lang="ts">
	import type { Location } from '@prisma/client';

	export let location: Location;

	$: href = `/locations/${location.id}`;
</script>

<li class="flex flex-row justify-center w-full">
	<a {href} class="text-xl btn btn-lg">
		{location.name}
	</a>
</li>
