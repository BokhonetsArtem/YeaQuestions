import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ISpecialization } from "../model/types";
import { API_BASE_URL } from "@/6_shared/constants";

const specializationApi = createApi({
  reducerPath: "specializationApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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
