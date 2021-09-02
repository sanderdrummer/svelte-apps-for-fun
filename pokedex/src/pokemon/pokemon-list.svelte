<script>
	import {pokemonStore, fetchPokemon} from './pokemon-store'
	import Button from '../components/button.svelte'
	import PokemonDetails from './pokemon-details.svelte'

	let query = ""
	let limit = 0
	let loading = false
	let filteredPokemon = []

	const loadMore = async () => {
		loading = true
		limit += 1
		const pokemon = await fetchPokemon(limit)
		pokemonStore.set(pokemon)
		loading = false
	}

	$: {
		if (query) {
			filteredPokemon = $pokemonStore.filter(({name}) => name.includes(query))	
		} else {
			filteredPokemon = [...$pokemonStore]
		}
	}
</script>
<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 2rem;
		margin: 2rem
	}

	input {
		padding: 1rem;
		margin: 2rem;
	}

	:global(.button) {
		margin: 2rem
	}
</style>

	<input bind:value={query} type="search" placeholder="find pokemon" />

	<div>
	{#each filteredPokemon as pokemon}
		<PokemonDetails pokemon={pokemon} />
	{/each}
	</div>
	

<Button class="button" on:click={loadMore}>
	{#if loading}
	...loading more pokemon
	{:else}
	load more pokemon
	{/if}
</Button>