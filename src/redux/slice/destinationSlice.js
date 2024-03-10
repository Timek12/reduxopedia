import { createSlice } from "@reduxjs/toolkit";

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
        name: "Warsa",
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
    }
  },
});

export const destinationReducer = destinationSlice.reducer;
export const {destinationClicked} = destinationSlice.actions;