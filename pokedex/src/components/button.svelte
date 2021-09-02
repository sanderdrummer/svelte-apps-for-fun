
<button class={$$props.class} on:click>
	<slot></slot>
</button>

<style>
	button {
		padding: 1rem;
		background: var(--primary-color);
		color: white;
		text-transform: uppercase;
		border: none;
		border-radius: 1rem;
	}
</style>