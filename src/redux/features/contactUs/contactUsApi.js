import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";
import { cleanObject } from "@/utils/cleanObject";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sendContact: build.mutation({
      query: (payload) => ({
        url: `/contact-us`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.CONTACT_US],
    }),
    getAllContactByAdmin: build.query({
      query: (args) => {
        const filteredParams = cleanObject(args);
        return {
          url: `/admin/contact-us`,
          method: "GET",
          params: filteredParams,
        };
      },
      providesTags: [tagTypes.CONTACT_US],
    }),
    getSingleContactByAdmin: build.query({
      query: (id) => ({
        url: `/admin/contact-us/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.CONTACT_US],
    }),
    deleteContactByAdmin: build.mutation({
      query: (id) => ({
        url: `/admin/contact-us/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.CONTACT_US],
    }),
  }),
});

export const {
  useSendContactMutation,
  useGetAllContactByAdminQuery,
  useGetSingleContactByAdminQuery,
  useDeleteContactByAdminMutation,
} = contactUsApi;
