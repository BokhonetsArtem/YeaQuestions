import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";

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
  }),
});

export const { useGetQuestionsQuery } = questionApi;

export default questionApi;
