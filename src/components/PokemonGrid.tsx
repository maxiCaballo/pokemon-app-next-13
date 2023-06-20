import { ISimplePokemon } from '../interfaces';
import { PokemonCard } from './PokemonCard';

interface Props {
	pokemons: ISimplePokemon[];
}
export const PokemonGrid: React.FC<Props> = ({ pokemons }: Props) => {
	return (
		<div className='flex flex-wrap gap-10 items-center justify-center'>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
};
