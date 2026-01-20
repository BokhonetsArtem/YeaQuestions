import { finalParams } from "@/6_shared/utils/finalParams";
import { baseApi } from "@/6_shared/api";
import type {
  IQuestion,
  QuestionsParams,
  QuestionsResponse,
} from "../model/types";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (params: QuestionsParams) => ({
        url: `questions/public-questions`,
        params: finalParams(params),
      }),
      transformResponse: (response: QuestionsResponse) => {
        return { data: response.data, total: response.total };
      },
    }),
    getQuestionById: builder.query<IQuestion, string>({
      query: (id) => ({
        url: `questions/public-questions/${id}`,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;

export default questionApi;
