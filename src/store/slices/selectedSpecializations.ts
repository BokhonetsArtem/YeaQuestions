import { createSlice } from "@reduxjs/toolkit";
import type { ISpecialization } from "../services/specializationApi";

type activeSpecializations = {
  items: ISpecialization[];
};

const initialState: activeSpecializations = {
  items: [],
};

export const selectedSpecializationsSlice = createSlice({
  name: "selectedSpecializations",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const exists = state.items.some((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const selectedSpecializationsReducer =
  selectedSpecializationsSlice.reducer;
