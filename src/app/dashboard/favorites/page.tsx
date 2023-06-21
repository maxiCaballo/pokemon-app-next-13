import { PokemonGrid } from '@/components';

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <div className="text-5xl my-5">
        Favorites Pokemon list <small className="text-blue-500">Redux</small>
      </div>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
