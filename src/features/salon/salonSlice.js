import { Cookies } from "react-cookie";
import { apiSlice } from "../api/apiSlice";

const aToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWM5ZDNkYjg0ODFkOTNiODVmMjU5NyIsInJvbGUiOiJVU0VSIiwiZW1haWwiOiJucmJuYXlvbmlpNTU1NUBnbWFpbC5jb20iLCJuYW1lIjoiTmF5b24zMzMiLCJpYXQiOjE3Mzg1NjA3NzIsImV4cCI6MTczODY0NzE3Mn0.0PgHWtaFZmFmOFh2L0-H_l06hm73LWkvzPCAgSAfzHA";

export const extendedSalonApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSalon: builder.query({
      query: () => {
        const cookies = new Cookies();
        const token = cookies.get("token");
        return {
          url: "/salon/all",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Salon"],
    }),
  }),
});

export const { useGetAllSalonQuery } = extendedSalonApiSlice;
