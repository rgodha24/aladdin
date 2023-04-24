<script lang="ts">
	import type { Location } from '@prisma/client';

	export let location: Location;
</script>

<div class="w-40 h-40 rounded-xl bg-bluegray-700">
	<h3 class="my-auto text-3xl text-center text-slate-200">{location.name}</h3>
</div>
