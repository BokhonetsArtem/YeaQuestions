import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => `questions/public-questions`,
      transformResponse: (response: { data: any[] }) => response.data,
    }),
  }),
});

export const { useGetQuestionsQuery } = questionApi;

export default questionApi;
