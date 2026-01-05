import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});
