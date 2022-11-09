import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { PetContact } from '../../types/PetsDTO/petContact';

export const petContactQrCodeApi = createApi({
  reducerPath: 'petContactQrCodeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://91.241.64.154:8080/' }),
  endpoints: (builder) => ({
    createQrCode: builder.mutation<string, { body: PetContact, id: number }>({
      query: ({ body, id }) => ({
        url: `/api/client/pet/${id}/qr`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateQrCodeMutation } = petContactQrCodeApi;
