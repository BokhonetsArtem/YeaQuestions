import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";
import type { ISkill } from "./skillsApi";
import type { ISpecialization } from "./specializationApi";
import { finalParams } from "../../utils/finalParams";

export interface IQuestion {
  id: string;
  rate: number;
  title: string;
  imageSrc: string;
  skills: ISkill[];
  complexity: number;
  longAnswer: string;
  keywords: string[];
  description: string;
  shortAnswer: string;
  specializations: ISpecialization[];
}

export type QuestionsParams = {
  page: number;
  limit: number;
  rate: number[];
  keywords: string[];
  skillsIds: string[];
  complexity: number[];
  specializationId: number | null;
};

type QuestionsResponse = {
  data: IQuestion[];
  total: number;
};

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
