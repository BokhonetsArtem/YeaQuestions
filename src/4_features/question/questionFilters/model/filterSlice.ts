import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFilters } from "./types";
import type { ISpecialization } from "../../../../5_entities/specialization";
import type { ISkill } from "../../../../5_entities/skills";

const initialState: IFilters = {
  rate: [],
  title: "",
  keywords: [],
  skillsIds: [],
  complexity: [],
  currentPage: 1,
  specializationId: null,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    toggleSpecialization: (state, action: PayloadAction<ISpecialization>) => {
      if (state.specializationId === action.payload.id) {
        state.specializationId = null;
      } else {
        state.specializationId = action.payload.id;
      }
    },

    toggleSkills: (state, action: PayloadAction<ISkill>) => {
      if (state.skillsIds.includes(action.payload.id)) {
        state.skillsIds = state.skillsIds.filter(
          (id) => id !== action.payload.id,
        );
      } else {
        state.skillsIds.push(action.payload.id);
      }
    },

    toggleComplexity: (state, action: PayloadAction<number[]>) => {
      const payloadInState = state.complexity.includes(action.payload[0]);

      if (payloadInState) {
        state.complexity = state.complexity.filter(
          (lvl) => !action.payload.includes(lvl),
        );
      } else {
        state.complexity = state.complexity.concat(action.payload);
      }
    },

    toggleRating: (state, action: PayloadAction<number>) => {
      if (state.rate.includes(action.payload)) {
        state.rate = state.rate.filter((item) => item !== action.payload);
      } else {
        state.rate.push(action.payload);
      }
    },

    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload.trim().toLocaleLowerCase();
    },

    setKeywords: (state, action: PayloadAction<string>) => {
      const formattedString = action.payload
        .trim()
        .toLocaleLowerCase()
        .split(/\s+/);
      state.keywords = formattedString;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setTitle,
  setKeywords,
  toggleSkills,
  toggleRating,
  setCurrentPage,
  toggleComplexity,
  toggleSpecialization,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
