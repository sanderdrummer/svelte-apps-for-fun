<script>
import { pokemonStore } from "../pokemon/pokemon-store";

</script>

<svelte:head>
	<title>Pokemon</title>
</svelte:head>

<ul>
	{#each $pokemonStore as pokemon}
	<li>{pokemon.name}</li>
	{/each}
</ul>