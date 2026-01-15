import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";
import type { ISkill } from "./skillsApi";
import type { ISpecialization } from "./specializationApi";

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

type QuestionsParams = {
  page: number;
  limit: number;
  search: string;
  rate: number[];
  skills: ISkill[];
  complexity: number[][];
  specializations: ISpecialization[];
};

const finalParams = (params: Partial<QuestionsParams>) => {
  const result: Record<string, string> = {};
  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined && value !== null && Array.isArray(value)
        ? value.length > 0
        : true
    ) {
      result[key] = Array.isArray(value) ? value.join(",") : String(value);
    }
  });
  return result;
};

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (params: QuestionsParams) => ({
        url: `questions/public-questions`,
        params: params ? finalParams(params) : undefined,
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
