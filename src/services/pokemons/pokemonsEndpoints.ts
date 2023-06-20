import { IPokemonResponse, ISimplePokemon, Pokemon } from '@/interfaces';
import { notFound } from 'next/navigation';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = async (limit = 20, offset = 0): Promise<ISimplePokemon[]> => {
  const res: IPokemonResponse = await fetch(`${baseURL}?limit=${limit}&offset=${offset}`).then((res) => res.json());

  const data = res.results.map((pokemon) => ({ id: pokemon.url.split('/').at(-2)!, name: pokemon.name }));

  //throw new Error('Something went wrong');

  return data;
};

const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const data = await fetch(`${baseURL}/${id}`, {
      //cache: 'force-cache', //TODO: Cambiar
      // next: {
      //   revalidate: 60 * 60 * 30 * 6 //
      // }
    });

    const pokemon = await data.json();

    return pokemon;
  } catch (error) {
    notFound();
  }
};

const getPokemonByName = async (name: string): Promise<Pokemon> => {
  try {
    const data = await fetch(`${baseURL}/${name}`, {
      //cache: 'force-cache', //TODO: Cambiar
      // next: {
      //   revalidate: 60 * 60 * 30 * 6 //
      // }
    });

    const pokemon = await data.json();

    return pokemon;
  } catch (error) {
    notFound();
  }
};

export { getPokemons, getPokemonByName, getPokemonById };
