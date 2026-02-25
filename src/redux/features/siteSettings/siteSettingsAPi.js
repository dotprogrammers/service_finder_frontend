import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const siteSettingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Legacy endpoints for backward compatibility
    createOrUpdateCmsContent: build.mutation({
      query: (data) => ({
        url: `/admin/cms-content`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.SITE_SETTINGS_CONTENT, tagTypes.CMS_CONTENT],
    }),
    getCmsContent: build.query({
      query: (page) => ({
        url: `/cms-content`,
        method: "GET",
        params: { page },
      }),
      providesTags: [tagTypes.SITE_SETTINGS_CONTENT],
      meta: { skipAuth: true },
    }),

    // New dynamic CMS endpoints
    getAllCmsPages: build.query({
      query: () => ({
        url: `/admin/cms-content/all-pages`,
        method: "GET",
      }),
      providesTags: [tagTypes.CMS_CONTENT],
    }),
    getCmsContentByPage: build.query({
      query: (page) => ({
        url: `/admin/cms-content/page/${page}`,
        method: "GET",
      }),
      providesTags: [tagTypes.CMS_CONTENT],
    }),
    createOrUpdateDynamicContent: build.mutation({
      query: (data) => ({
        url: `/admin/cms-content`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.CMS_CONTENT, tagTypes.SITE_SETTINGS_CONTENT],
    }),
    deleteCmsField: build.mutation({
      query: ({ page, record_id }) => ({
        url: `/admin/cms-content/field`,
        method: "DELETE",
        body: { page, record_id },
      }),
      invalidatesTags: [tagTypes.CMS_CONTENT],
    }),
    deleteCmsPage: build.mutation({
      query: (page) => ({
        url: `/admin/cms-content/page/${page}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.CMS_CONTENT],
    }),
    getDashboardData: build.query({
      query: () => ({
        url: `/dashboard`,
        method: "GET",
      }),
    }),

    // dropdown options
    createStartupCategoriesDD: build.mutation({
      query: (data) => ({
        url: `/admin/startup-categories`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.DD_STARTUP_CATEGORIES],
    }),
    getAllStartupCategoriesDD: build.query({
      query: () => ({
        url: `/startup-categories`,
        method: "GET",
      }),
      providesTags: [tagTypes.DD_STARTUP_CATEGORIES],
    }),
    updateStartupCategoriesDD: build.mutation({
      query: ({ payload, id }) => ({
        url: `/admin/startup-categories/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: [tagTypes.DD_STARTUP_CATEGORIES],
    }),
    deleteStartupCategoriesDD: build.mutation({
      query: (id) => ({
        url: `/admin/startup-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.DD_STARTUP_CATEGORIES],
    }),

    createFundingStageCategoriesDD: build.mutation({
      query: (data) => ({
        url: `/admin/founding-stages`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.DD_FUNDING_STAGES],
    }),
    getAllFundingStageCategoriesDD: build.query({
      query: () => ({
        url: `/founding-stages`,
        method: "GET",
      }),
      providesTags: [tagTypes.DD_FUNDING_STAGES],
    }),
    updateFundingStageCategoriesDD: build.mutation({
      query: ({ payload, id }) => ({
        url: `/admin/founding-stages/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: [tagTypes.DD_FUNDING_STAGES],
    }),
    deleteFundingStageCategoriesDD: build.mutation({
      query: (id) => ({
        url: `/admin/founding-stages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.DD_FUNDING_STAGES],
    }),

    createCurrenciesDD: build.mutation({
      query: (data) => ({
        url: `/admin/currencies`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.DD_CURRENCIES],
    }),
    getAllCurrenciesDD: build.query({
      query: () => ({
        url: `/currencies`,
        method: "GET",
      }),
      providesTags: [tagTypes.DD_CURRENCIES],
    }),
    updateCurrenciesDD: build.mutation({
      query: ({ payload, id }) => ({
        url: `/admin/currencies/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: [tagTypes.DD_CURRENCIES],
    }),
    deleteCurrenciesDD: build.mutation({
      query: (id) => ({
        url: `/admin/currencies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.DD_CURRENCIES],
    }),
  }),
});

export const {
  // Legacy exports for backward compatibility
  useCreateOrUpdateCmsContentMutation,
  useGetCmsContentQuery,

  // New dynamic CMS exports
  useGetAllCmsPagesQuery,
  useGetCmsContentByPageQuery,
  useCreateOrUpdateDynamicContentMutation,
  useDeleteCmsFieldMutation,
  useDeleteCmsPageMutation,

  // Dashboard exports
  useGetDashboardDataQuery,

  // Dropdown options
  useCreateStartupCategoriesDDMutation,
  useGetAllStartupCategoriesDDQuery,
  useUpdateStartupCategoriesDDMutation,
  useDeleteStartupCategoriesDDMutation,
  useCreateFundingStageCategoriesDDMutation,
  useGetAllFundingStageCategoriesDDQuery,
  useUpdateFundingStageCategoriesDDMutation,
  useDeleteFundingStageCategoriesDDMutation,
  useCreateCurrenciesDDMutation,
  useGetAllCurrenciesDDQuery,
  useUpdateCurrenciesDDMutation,
  useDeleteCurrenciesDDMutation,
} = siteSettingsApi;
