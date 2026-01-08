import { configureStore } from "@reduxjs/toolkit";
import questionApi from "./services/questionApi";
import specializationApi from "./services/specializationApi";
import skillsApi from "./services/skillsApi";

const rootReducer = {
  [questionApi.reducerPath]: questionApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(questionApi.middleware)
      .concat(specializationApi.middleware)
      .concat(skillsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
