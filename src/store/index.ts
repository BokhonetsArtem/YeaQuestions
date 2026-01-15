import { configureStore } from "@reduxjs/toolkit";
import questionApi from "./services/questionApi";
import specializationApi from "./services/specializationApi";
import skillsApi from "./services/skillsApi";
import { filterReducer } from "./slices/filter";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { selectedSpecializationsReducer } from "./slices/selectedSpecializations";

const rootReducer = {
  [questionApi.reducerPath]: questionApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  filterReducer,
  selectedSpecializationsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(questionApi.middleware)
      .concat(specializationApi.middleware)
      .concat(skillsApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
