import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/6_shared/constants";
import type { ISkill } from "../model/types";

const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getSkills: builder.query<ISkill[], void>({
      query: () => ({
        url: `skills`,
      }),
      transformResponse: (response: { data: any[] }) => response.data,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;

export default skillsApi;
