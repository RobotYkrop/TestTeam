import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Procedure, ProcedureResponse } from '../../types/PetsDTO/procedure';

export const vaccinationApi = createApi({
  reducerPath: 'vaccinationApi',
  tagTypes: ['allVaccination', 'vaccination'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://91.241.64.154:8080/' }),
  endpoints: (build) => ({
    getAllVaccinationByPetId: build.query<ProcedureResponse[], { petId:number }>({
      query: ({ petId }) => `api/client/procedure/vaccination/${petId}`,
      providesTags: ['allVaccination'],
    }),
    getVaccinationByIdProcedure: build.query<ProcedureResponse, { id:number }>({
      query: ({ id }) => `api/client/procedure/vaccination/${id}`,
      providesTags: ['vaccination'],
    }),
    addVaccinationProcedure: build.mutation<ProcedureResponse, { id: number, body: Procedure }>({
      query: ({ id, body }) => ({
        url: `api/client/procedure/vaccination/${id}`,
        method: 'POST',
        body: { ...body },
      }),
      invalidatesTags: ['allVaccination'],
    }),
    updateVaccinationProcedure: build.mutation<ProcedureResponse, { id:number, body:ProcedureResponse }>({
      query: ({ id, body }) => ({
        url: `api/client/procedure/vaccination/${id}`,
        method: 'PUT',
        body: { ...body },
      }),
      invalidatesTags: ['vaccination'],
    }),
    deleteVaccinationProcedure: build.mutation<ProcedureResponse, { id:number }>({
      query: ({ id }) => ({
        url: `api/client/procedure/vaccination/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['allVaccination'],
    }),
  }),
});

export const { useGetAllVaccinationByPetIdQuery,
  useGetVaccinationByIdProcedureQuery,
  useAddVaccinationProcedureMutation,
  useUpdateVaccinationProcedureMutation,
  useDeleteVaccinationProcedureMutation } = vaccinationApi;
