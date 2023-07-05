'use client';
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';

export const FavoritesPokemons = () => {
  const favoritesPokemons = useAppSelector((state) => Object.values(state.favoritesPokemons));
  return <PokemonGrid pokemons={favoritesPokemons} />;
};
