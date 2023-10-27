import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '../services/postsApi'
import { commentsApi } from '../services/commentsApi'
import { albumsApi } from '../services/albumsApi'
import { photosApi } from '../services/photosApi'
export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [postsApi.reducerPath]: postsApi.reducer,
      [commentsApi.reducerPath]: commentsApi.reducer,
      [albumsApi.reducerPath]: albumsApi.reducer,
      [photosApi.reducerPath]: photosApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware,commentsApi.middleware,albumsApi.middleware,photosApi.middleware),
  })
  setupListeners(store.dispatch)