<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let onClick: () => void = () => {};
	export let type: 'button' | 'submit' = 'button';
	export let loading = false;
</script>

<button
	class="btn"
	class:variant-filled-primary={variant === 'primary'}
	class:variant-filled-secondary={variant === 'secondary'}
	class:variant-filled-error={variant === 'danger'}
	class:loading
	on:click={onClick}
	{type}
>
	<slot />
</button>

<style lang="postcss">
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
	@keyframes loading {
		0% {
			left: -50%;
		}
		100% {
			left: 100%;
		}
	}
</style>
