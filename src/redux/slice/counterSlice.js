import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 7,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // here we define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count *= parseInt(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count /= parseInt(action.payload);
    },
  },
});

export const { increment, decrement, incrementMultiplier, decrementMultiplier } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
