import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tagTypes";
import { cleanObject } from "@/utils/cleanObject";

const unwrap = (resp) => {
  if (!resp) return {};
  if (resp.data && typeof resp.data === "object" && !Array.isArray(resp.data)) {
    if (resp.data.data && typeof resp.data.data === "object")
      return resp.data.data;
    return resp.data;
  }
  return resp;
};

const settingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    /* ===================== Logo & Favicon ===================== */
    getLogo: build.query({
      query: () => ({ url: "/logo", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
      meta: { skipAuth: true },
    }),
    updateLogo: build.mutation({
      query: (payload) => {
        return { url: "/admin/logo", method: "POST", body: payload };
      },
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== Social Networks ===================== */
    getSocialNetworks: build.query({
      query: () => ({ url: "/social-networks", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
      meta: { skipAuth: true },
    }),
    updateSocialNetworks: build.mutation({
      query: (body) => ({
        url: "/admin/social-networks",
        method: "PUT",
        body,
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== Site Settings ===================== */
    getSiteSettings: build.query({
      query: () => ({ url: "/site-settings", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
      meta: { skipAuth: true },
    }),
    updateSiteSettings: build.mutation({
      query: (body) => ({
        url: "/admin/site-settings",
        method: "PUT",
        body,
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== GTM / Analytics ===================== */
    getGtm: build.query({
      query: () => ({ url: "/gtm", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
      meta: { skipAuth: true },
    }),
    updateGtm: build.mutation({
      query: (body) => ({
        url: "/admin/gtm",
        method: "PUT",
        body, // { gtm_id, gtag_id, enable_gtm, head_script, body_script }
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== SEO Settings ===================== */
    getSeoSettings: build.query({
      query: () => ({ url: "/seo", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
      meta: { skipAuth: true },
    }),
    updateSeoSettings: build.mutation({
      // Using FormData to allow og_image upload
      query: (payload = {}) => {
        return { url: "/admin/seo", method: "PUT", body: payload };
      },
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== Email Configurations ===================== */
    getEmailConfig: build.query({
      query: () => ({ url: "/admin/email-config", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
    }),
    updateEmailConfig: build.mutation({
      query: (body) => ({
        url: "/admin/email-config",
        method: "PUT",
        body, // { mail_mailer, mail_host, mail_port, ... }
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== Stripe Settings ===================== */
    getStripeSettings: build.query({
      query: () => ({ url: "/admin/stripe-setting", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
    }),
    updateStripeSettings: build.mutation({
      query: (body) => ({
        url: "/admin/stripe-setting",
        method: "PUT",
        body, // e.g., { publishable_key, secret_key, webhook_secret }
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    /* ===================== Sumsub Settings ===================== */

    getSumsubSettings: build.query({
      query: () => ({ url: "/admin/sumsub-settings", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
    }),
    updateSumsubSettings: build.mutation({
      query: (body) => ({
        url: "/admin/sumsub-setting",
        method: "PUT",
        body,
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),

    // contact settings
    getContactSettings: build.query({
      query: () => ({ url: "/contact", method: "GET" }),
      transformResponse: unwrap,
      providesTags: [tagTypes.SETTINGS],
    }),
    addContactSettings: build.mutation({
      query: (body) => ({
        url: "/admin/contact",
        method: "PUT",
        body,
      }),
      invalidatesTags: [tagTypes.SETTINGS],
    }),
  }),
});

export const {
  useGetLogoQuery,
  useUpdateLogoMutation,
  useGetSocialNetworksQuery,
  useUpdateSocialNetworksMutation,
  useGetSiteSettingsQuery,
  useUpdateSiteSettingsMutation,
  useGetGtmQuery,
  useUpdateGtmMutation,
  useGetSeoSettingsQuery,
  useUpdateSeoSettingsMutation,
  useGetEmailConfigQuery,
  useUpdateEmailConfigMutation,
  useGetStripeSettingsQuery,
  useUpdateStripeSettingsMutation,
  useGetSumsubSettingsQuery,
  useUpdateSumsubSettingsMutation,
  useGetContactSettingsQuery,
  useAddContactSettingsMutation,
} = settingsApi;

export default settingsApi;
