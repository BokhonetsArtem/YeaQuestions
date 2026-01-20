import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { baseApi } from "@/6_shared/api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
