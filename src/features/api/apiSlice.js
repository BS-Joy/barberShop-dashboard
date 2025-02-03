import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `http://10.0.70.205:4000/api/v1` }),
  tagTypes: ["Salon"],
  endpoints: (builder) => ({}),
});
