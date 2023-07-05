import { ISimplePokemon } from './simple-pokemon';

export interface IPokemonFavoritesState {
  [key: string]: ISimplePokemon;
}
