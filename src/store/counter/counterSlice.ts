import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.counter++;
    },

    substractOne(state) {
      state.counter--;
      state.counter = Math.max(0, state.counter);
    },
    resetCounter(state, action: PayloadAction<number>) {
      action.payload = Math.max(0, action.payload);

      state.counter = action.payload;
    },
  },
});

export const { addOne, substractOne, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;
