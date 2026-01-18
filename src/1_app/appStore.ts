import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { questionApi } from "@/5_entities/question";
import { specializationApi } from "@/5_entities/specialization";
import { skillsApi } from "@/5_entities/skills";

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
