
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './authAPI';
import { reproductionApi } from './client/reproductionApi';
import { vaccinationApi } from './client/vaccinationApi';
import { petContactQrCodeApi } from './client/petContactQrCode.api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [reproductionApi.reducerPath]: reproductionApi.reducer,
    [vaccinationApi.reducerPath]: vaccinationApi.reducer,
    [petContactQrCodeApi.reducerPath]: petContactQrCodeApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(
    authApi.middleware,
    reproductionApi.middleware,
    vaccinationApi.middleware,
    petContactQrCodeApi.middleware
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
