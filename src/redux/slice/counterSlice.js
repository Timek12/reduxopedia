import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOPedia } from "../action/actions";

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
      state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = initialState.count;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia.toString(), (state) => {
      state.count = initialState.count;
    })
  }
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
