import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ISpecialization } from "../services/specializationApi";
import type { ISkill } from "../services/skillsApi";

interface IFilters {
  search: string;
  rate: number[];
  skills: ISkill[];
  complexity: number[][];
  specializations: ISpecialization[];
}

const initialState: IFilters = {
  rate: [],
  search: "",
  skills: [],
  complexity: [],
  specializations: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    toggleSpecialization: (state, action: PayloadAction<ISpecialization>) => {
      if (state.specializations.includes(action.payload)) {
        state.specializations = state.specializations.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.specializations.push(action.payload);
      }
    },

    toggleSkills: (state, action: PayloadAction<ISkill>) => {
      if (state.skills.includes(action.payload)) {
        state.skills = state.skills.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.skills.push(action.payload);
      }
    },

    toggleComplexity: (state, action: PayloadAction<number[]>) => {
      const isSameArray = (a: number[], b: number[]) =>
        a.length === b.length && a.every((value, index) => value === b[index]);

      const exists = state.complexity.some((item) =>
        isSameArray(item, action.payload)
      );

      if (exists) {
        state.complexity = state.complexity.filter(
          (item) => !isSameArray(item, action.payload)
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
  toggleSkills,
  toggleRating,
  toggleComplexity,
  toggleSpecialization,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
