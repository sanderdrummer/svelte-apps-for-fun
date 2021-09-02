<script>

	import {fade} from 'svelte/transition'
	export let pokemon

</script>

<style>
	div {
		background: #aaa;
		border-radius: 1rem;
		padding: 1rem
	}
	img {
		width: 100%;
	}

</style>

<div transition:fade>
	<img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}>
	<h2>
	{pokemon.name}
	</h2>
</div>