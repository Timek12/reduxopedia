import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong-Kong",
        days: 7,
        fact: "World's largest covered escalator",
      },
      {
        name: "Japan",
        days: 12,
        fact: "Japan is mostly mountains.",
      },
      {
        name: "Warsaw",
        days: 21,
        fact: "The capital of Poland",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
    resetDestination: (state, action) => {
        state.destinationSelected = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia.toString(), (state) => {
        state.destinationSelected = undefined;
    });
  },
});

export const destinationReducer = destinationSlice.reducer;
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
