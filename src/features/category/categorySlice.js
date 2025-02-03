import { Cookies } from "react-cookie";
import { apiSlice } from "../api/apiSlice";

export const extendedCategroyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        const cookies = new Cookies();
        const token = cookies.get("token");

        return {
          url: "/category",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});
