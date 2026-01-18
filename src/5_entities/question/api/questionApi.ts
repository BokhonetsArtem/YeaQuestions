import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/6_shared/constants";
import { finalParams } from "@/6_shared/utils/finalParams";
import type {
  IQuestion,
  QuestionsParams,
  QuestionsResponse,
} from "../model/types";

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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
