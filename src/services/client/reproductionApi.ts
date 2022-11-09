import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Reproduction, UpdateReproduction } from '../../types/PetsDTO/reproduction';

export const reproductionApi = createApi({
  reducerPath: 'reproductionApi',
  tagTypes: ['Reproductions'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://91.241.64.154:8080/' }),
  endpoints: (build) => ({
    getAllReproductionPet: build.query<Reproduction[], number>({
      query: (id:number) => `api/client/pet/petId=${id}/reproduction`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: 'Reproductions' as const, id })),
          { type: 'Reproductions', id: 'LIST' },
        ]
        : [{ type: 'Reproductions', id: 'LIST' }]),
    }),
    getReproductionPetById: build.query<Reproduction, { id:number, repId:number }>({
      query: ({ id, repId }) => `api/client/pet/petId=${id}/reproduction/reproductionId=${repId}`,
    }),
    addNewReproduction: build.mutation<Reproduction, { body:Reproduction, id:number }>({
      query: ({ body, id }) => ({
        url: `api/client/pet/petId=${id}/reproduction`,
        method: 'POST',
        body: { ...body },
      }),
      invalidatesTags: [{ type: 'Reproductions', id: 'LIST' }],
    }),
    updateReproductionById: build.mutation<Reproduction, { body: UpdateReproduction, id:number, repId:number }>({
      query: ({ body, id, repId }) => ({
        url: `api/client/pet/petId=${id}/reproduction/reproductionId=${repId}`,
        method: 'PUT',
        body: { ...body },
      }),
      invalidatesTags: [{ type: 'Reproductions', id: 'LIST' }],
    }),
    deleteReproduction: build.mutation<string, { id:number, repId:number }>({
      query: ({ id, repId }) => ({
        url: `api/client/pet/petId=${id}/reproduction/reproductionId=${repId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Reproductions', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllReproductionPetQuery,
  useGetReproductionPetByIdQuery,
  useAddNewReproductionMutation,
  useUpdateReproductionByIdMutation,
  useDeleteReproductionMutation } = reproductionApi;
