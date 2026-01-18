export { default as QuestionItem } from "./UI/QuestionItem/QuestionItem";

export type { IQuestion } from "./model/types";

export { default as questionApi } from "./api/questionApi";

export {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
} from "./api/questionApi";
