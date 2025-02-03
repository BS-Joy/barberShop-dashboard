import { Cookies } from "react-cookie";
import { apiSlice } from "../api/apiSlice";

export const extendedUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        console.log(credentials);
        return {
          url: "/auth/login",
          method: "POSt",
          body: credentials,
        };
      },
      transformResponse: (response) => {
        const cookies = new Cookies();

        cookies.set("token", response?.data?.accessToken, { path: "/" });

        return response;
      },
    }),
  }),
});

export const { useLoginMutation } = extendedUserApiSlice;
