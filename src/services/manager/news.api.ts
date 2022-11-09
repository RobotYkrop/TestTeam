import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetNews } from '../../types/ClientDTO/news';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/',
  }),
  endpoints: (build) => ({

    deleteNews: build.query<any, string>({
      query: (id) => ({
        url: `api/manager/news/${id}`,
        method: 'delete',
      }),
    }),

    getNewsById: build.query<GetNews, string>({
      query: (id) => ({
        url: `api/manager/news/${id}`,
      }),
    }),

    getAllNews: build.query<GetNews, null>({
      query: () => ({
        url: 'api/manager/news',
      }),
    }),

    createNews: build.mutation<GetNews, any>({
      query: (data: any) => ({
        url: 'api/manager/news',
        method: 'post',
        body: { ...data },
      }),
    }),

    changeNewsById: build.mutation<GetNews, any>({
      query: ({ id, ...data }) => ({
        url: `api/manager/news/${id}`,
        method: 'put',
        body: { ...data },
      }),
    }),

    addNewsImg: build.mutation<any, any>({
      query: ({ id, ...data }) => ({
        url: `/api/manager/news/${id}/pictures`,
        method: 'put',
        body: { ...data },
      }),
    }),

    unPublishingNews: build.mutation<any, any>({
      query: (data) => ({
        url: '/api/manager/news/unpublish',
        method: 'put',
        body: { ...data },
      }),
    }),

    publishingNews: build.mutation<any, any>({
      query: (data) => ({
        url: '/api/manager/news/publish',
        method: 'put',
        body: { ...data },
      }),
    }),

  }),
});

const {
  useAddNewsImgMutation,
  useCreateNewsMutation,
  useChangeNewsByIdMutation,
  usePublishingNewsMutation,
  useUnPublishingNewsMutation,
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
  useDeleteNewsQuery,
} = newsApi;
