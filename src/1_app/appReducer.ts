import { filterReducer } from "@/4_features/question/filter";
import { questionApi } from "@/5_entities/question";
import { skillsApi } from "@/5_entities/skills";
import { specializationApi } from "@/5_entities/specialization";

export const rootReducer = {
  [questionApi.reducerPath]: questionApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  filterReducer,
};
