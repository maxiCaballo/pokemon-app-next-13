import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './counter/counterSlice';
import FavoritesPokemonsReducer from './pokemons/pokemons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    count: CounterReducer,
    favoritesPokemons: FavoritesPokemonsReducer,
  },
});

//Para que podamos tener un tipado estricto de como va a lucir nuestro store
export type RootState = ReturnType<typeof store.getState>;
//Tipado estricto de que acciones voy a poder hacerle dispatch
export type AppDispatch = typeof store.dispatch;

//En vez de usar useDispatch y useSelector usamos estos para que funcione mejor con
//Typescript
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
