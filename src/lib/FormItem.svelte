<script lang="ts">
	import type { Writable } from 'svelte/store';

	type T = $$Generic<string>;
	export let form: Writable<Record<T, string>>;
	export let errors: Writable<Partial<Record<T, string[] | undefined>>>;
	export let constraints: Writable<Partial<Record<T, object>>>;
	export let name: T;
	export let type: 'text' | 'password' = 'text';
	export let label: string;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="flex flex-row gap-4 mb-4">
	<label class="block mb-2 font-bold text-gray-300 min-w-8%" for={name}>
		{label}
	</label>
	<input
		class="py-2 px-3 w-full max-w-70% leading-tight text-gray-700 rounded border appearance-none focus:outline-none focus:shadow-outline"
		use:typeAction
		{name}
		id={name}
		bind:value={$form[name]}
		data-invalid={$errors[name]}
		{...$constraints[name]}
	/>
	{#if $errors[name]}
		<p class="text-red-500">{$errors[name]}</p>
	{/if}
</div>
