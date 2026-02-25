import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../../api/baseApi";
import { cleanObject } from "@/utils/cleanObject";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.USER_INFO],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: "/reset-password",
        method: "POST",
        body: payload,
      }),
    }),
    getAllFounders: builder.query({
      query: (args) => {
        const filteredParams = cleanObject(args);
        return {
          url: "/admin/founders",
          method: "GET",
          params: filteredParams,
        };
      },
      providesTags: [tagTypes.USERS],
    }),
    deleteFounder: builder.mutation({
      query: (id) => ({
        url: `/admin/founders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.USERS],
    }),
    getAllInvestors: builder.query({
      query: (args) => {
        const filteredParams = cleanObject(args);
        return {
          url: "/admin/investors",
          method: "GET",
          params: filteredParams,
        };
      },
      providesTags: [tagTypes.USERS],
    }),
    deleteInvestor: builder.mutation({
      query: (id) => ({
        url: `/admin/investors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.USERS],
    }),
    verifyUser: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/admin/users/${id}/verify`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.USERS],
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: "/profile/update",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.USER_INFO],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetAllFoundersQuery,
  useDeleteFounderMutation,
  useGetAllInvestorsQuery,
  useDeleteInvestorMutation,
  useVerifyUserMutation,
  useUpdateProfileMutation,
} = authApi;
