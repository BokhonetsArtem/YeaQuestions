import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";

export interface ISkill {
  id: string;
  title: string;
  imageSrc: string;
}

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
