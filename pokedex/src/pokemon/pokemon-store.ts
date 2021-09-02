import { writable } from 'svelte/store';

export type Pokemon = {
	name: string;
	id: number;
};

export const pokemonStore = writable<Pokemon[]>([]);

export const fetchPokemon = async (limit = 0): Promise<Pokemon[]> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
	const data = await res.json();
	return data?.results.map(({ name }, index) => ({ name, id: index + 1 }));
};
