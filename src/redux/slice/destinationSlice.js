import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destination: [
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
  };
};

export const destinationSlice = createSlice( {
    name: "destination",
    initialState: initialState,
    reducers: {
        
    }
})