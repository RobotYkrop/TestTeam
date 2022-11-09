import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../services/authAPI';
import { dewormingApi } from '../services/client/dewormingApi';
import { newsApi } from '../services/manager/news.api';

export const store = configureStore({
  reducer: {
    // authApi
    [authApi.reducerPath]: authApi.reducer,
    // client
    [dewormingApi.reducerPath]: dewormingApi.reducer,
    // manager
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    // authApi
    authApi.middleware,
    // client
    dewormingApi.middleware,
    // manager
    newsApi.middleware,
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
