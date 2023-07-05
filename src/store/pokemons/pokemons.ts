import { IPokemonFavoritesState, ISimplePokemon } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IPokemonFavoritesState = {
  '1': { id: '1', name: 'bulbasaur' },
  '2': { id: '2', name: 'ivysaur' },
  '3': { id: '3', name: 'venusaur' },
};

const pokemonsSlice = createSlice({
  name: 'favorites pokemons state',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<ISimplePokemon>) {
      const pokemon = action.payload;

      if (state[pokemon.id]) {
        delete state[pokemon.id];
        return;
      }

      state[pokemon.id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
