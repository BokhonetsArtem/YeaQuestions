import { createSlice, isAction, type PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

interface IFilters {
  specializations: string[];
  skills: string[];
  rate: number[];
  complexity: string[];
  search: string;
}

const initialState: IFilters = {
  specializations: [],
  skills: [],
  rate: [],
  complexity: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    toggleSpecialization: (state, action: PayloadAction<string>) => {
      if (state.specializations.includes(action.payload)) {
        state.specializations = state.specializations.filter(
          (item) => item !== action.payload
        );
      } else {
        state.specializations.push(action.payload);
      }
    },
    toggleSkills: (state, action: PayloadAction<string>) => {
      if (state.skills.includes(action.payload)) {
        state.skills = state.skills.filter((item) => item !== action.payload);
      } else {
        state.skills.push(action.payload);
      }
    },
    toggleComplexity: (state, action: PayloadAction<string>) => {
      if (state.complexity.includes(action.payload)) {
        state.complexity = state.complexity.filter(
          (item) => item !== action.payload
        );
      } else {
        state.complexity.push(action.payload);
      }
    },
    toggleRating: (state, action: PayloadAction<number>) => {
      if (state.rate.includes(action.payload)) {
        state.rate = state.rate.filter((item) => item !== action.payload);
      } else {
        state.rate.push(action.payload);
      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const {
  setSearch,
  toggleRating,
  toggleSkills,
  toggleComplexity,
  toggleSpecialization,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
