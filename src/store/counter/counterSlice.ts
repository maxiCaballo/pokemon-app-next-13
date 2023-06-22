import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
  isReady: boolean;
}

const initialState: CounterState = {
  counter: 1,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.counter = action.payload;
      state.isReady = true;
    },

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

export const { addOne, substractOne, resetCounter, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;
