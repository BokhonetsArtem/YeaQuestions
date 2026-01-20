import { baseApi } from "@/6_shared/api";
import type { ISkill } from "../model/types";

const skillsApi = baseApi.injectEndpoints({
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
