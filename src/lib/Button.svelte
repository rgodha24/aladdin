<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
	export let onClick: () => void = () => {};
	export let type: 'button' | 'submit' = 'button';
</script>

<button
	class="py-2 px-4 font-medium text-white rounded-md hover:opacity-90"
	class:primary={variant === 'primary'}
	class:secondary={variant === 'secondary'}
	class:danger={variant === 'danger'}
	on:click={onClick}
	{type}
>
	<slot />
</button>

<style>
	.primary {
		background-color: #3490dc;
	}
	.secondary {
		background-color: #6cb2eb;
	}
	.danger {
		background-color: #e3342f;
	}
</style>
