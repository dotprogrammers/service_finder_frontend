import { baseApi } from "../../api/baseApi";

const cmsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHomePageContent: build.query({
      query: () => ({
        url: `/get-home-page`,
        method: "GET",
      }),
    }),
    getSettingsValues: build.query({
      query: () => ({
        url: `/get-setting-values`,
        method: "GET",
      }),
    }),
    getAllBlogs: build.query({
      query: () => ({
        url: `/blogs`,
        method: "GET",
      }),
    }),
    getSingleBlog: build.query({
      query: (id) => ({
        url: `blog-single/${id}`,
        method: "GET",
      }),
    }),
    getAllCategories: build.query({
      query: () => ({
        url: `/get-categories`,
        method: "GET",
      }),
    }),
    getSingleCategory: build.query({
      query: (id) => ({
        url: `/single-category/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetHomePageContentQuery,
  useGetSettingsValuesQuery,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
} = cmsApi;
