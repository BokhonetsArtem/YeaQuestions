import { configureStore } from "@reduxjs/toolkit";
import questionApi from "./services/questionApi";

const rootReducer = {
  [questionApi.reducerPath]: questionApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
