import type { ISpecialization } from "../model/types";
import { baseApi } from "@/6_shared/api";

const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecialization: builder.query<ISpecialization[], void>({
      query: () => ({
        url: `specializations`,
      }),
      transformResponse: (response: { data: any[] }) => response.data,
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;

export default specializationApi;
