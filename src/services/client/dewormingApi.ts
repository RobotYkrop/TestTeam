import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Procedure, ProcedureResponse } from '../../types/PetsDTO/procedure';

export const dewormingApi = createApi({
  reducerPath: 'dewormingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/',
  }),
  tagTypes: ['Dewormings'],
  endpoints: (build) => ({
    getDewormingPet: build.query<ProcedureResponse, { id: number }>({
      query: (id) => `api/client/procedure/deworming?petId=${id}`,
    }),
    addNewDeworming: build.mutation<
    ProcedureResponse,
    { id: number; data: Procedure }
    >({
      query: ({ id, data }) => ({
        url: `api/client/procedure/deworming?petId=${id}`,
        method: 'POST',
        body: { ...data },
        invalidatesTags: [{ type: 'Dewormings', id: 'LIST' }],
      }),
    }),
    updateDeworming: build.mutation<
    ProcedureResponse,
    { id: number; data: Procedure }
    >({
      query: ({ id, data }) => ({
        url: `api/client/procedure/deworming/${id}`,
        method: 'PUT',
        body: { ...data },
        invalidatesTags: [{ type: 'Dewormings', id: 'LIST' }],
      }),
    }),
    deleteDeworming: build.mutation<any, number>({
      query: (id) => ({
        url: `api/client/procedure/deworming/${id}`,
        method: 'DELETE',
        invalidatesTags: [{ type: 'Dewormings', id: 'LIST' }],
      }),
    }),
    getDeworming: build.query<ProcedureResponse, number>({
      query: (id) => `api/client/procedure/deworming/${id}`,
    }),
  }),
});

export const {
  useGetDewormingPetQuery,
  useAddNewDewormingMutation,
  useUpdateDewormingMutation,
  useDeleteDewormingMutation,
  useGetDewormingQuery,
} = dewormingApi;
