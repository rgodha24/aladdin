<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
	export let onClick: () => void = () => {};
	export let type: 'button' | 'submit' = 'button';
	export let disabled = false;
	export let loading = false;
</script>

<button
	class="py-2 px-4 font-medium text-white rounded-md hover:opacity-90"
	class:primary={variant === 'primary'}
	class:secondary={variant === 'secondary'}
	class:danger={variant === 'danger'}
	class:loading
	class:disabled
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
	.loading {
		overflow: hidden;
		position: relative;

		@apply border-white border-2;
	}
	.loading::before {
		content: '';
		position: absolute;
		left: -50%;
		top: 0;
		width: 50%;
		height: 100%;
		background: linear-gradient(to right, transparent, #f2f2f2, transparent);
		animation: loading 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	.disabled {
		@apply opacity-50 cursor-not-allowed;
	}

	@keyframes loading {
		0% {
			left: -50%;
		}
		100% {
			left: 100%;
		}
	}
</style>
