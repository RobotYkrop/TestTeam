import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse, LoginUser } from '../types/AuthDTO';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/',
  }),
  endpoints: (build) => ({
    loginUser: build.mutation<AuthResponse, LoginUser>({
      query: (data: LoginUser) => ({
        url: 'api/auth',
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
