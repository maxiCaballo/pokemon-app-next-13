import { PokemonGrid } from '@/components/PokemonGrid';
import { getPokemons } from '@/services';

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="text-5xl my-5">
        Pokemon list <small className="text-blue-500">static</small>
      </div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
