import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";

interface ISpecialization {
  id: string;
  title: string;
}

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
