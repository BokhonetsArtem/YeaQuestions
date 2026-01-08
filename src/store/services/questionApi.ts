import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";

interface ISkill {
  title: string;
  imageSrc: string;
}

export interface IQuestion {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  keywords: string[];
  questionSkills: ISkill[];
}

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `questions/public-questions`,
        params: {
          page,
          limit,
        },
      }),
      transformResponse: (response: { data: any[]; total: number }) => {
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
