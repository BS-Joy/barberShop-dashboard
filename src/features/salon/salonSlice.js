import { Cookies } from "react-cookie";
import { apiSlice } from "../api/apiSlice";

export const extendedSalonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSalon: builder.query({
      query: (query) => {
        const cookies = new Cookies();
        const token = cookies.get("token");

        let url = "/salon/all";
        if (query) {
          url += `?status=${query}`;
        }
        return {
          url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: (result, error, arg) => [
        { type: "Salon", id: "LIST" },
        ...(result ? result.map(({ id }) => ({ type: "Salon", id })) : []),
      ],
    }),
  }),
});

export const { useGetAllSalonQuery } = extendedSalonApiSlice;
