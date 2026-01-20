import { filterReducer } from "@/4_features/question/questionFilters";
import { baseApi } from "@/6_shared/api";

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  filterReducer,
};
