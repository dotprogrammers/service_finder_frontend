import { cleanObject } from "@/utils/cleanObject";
import { baseApi } from "../../api/baseApi";
import { tagTypes } from "@/redux/tagTypes";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // blog api
    createBlog: builder.mutation({
      query: (data) => ({
        url: `/admin/blogs`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.BLOGS],
    }),
    getAllBlogs: builder.query({
      query: (args) => {
        const filteredParams = cleanObject(args);
        return {
          url: "/blogs",
          method: "GET",
          params: filteredParams,
        };
      },
      providesTags: [tagTypes.BLOGS],
      meta: { skipAuth: true },
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.BLOGS],
      meta: { skipAuth: true },
    }),
    updateBlog: builder.mutation({
      query: (payload) => ({
        url: `/admin/blogs/${payload?.id}`,
        method: "POST",
        body: payload?.data,
      }),
      invalidatesTags: [tagTypes.BLOGS],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/admin/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.BLOGS],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;
