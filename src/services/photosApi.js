import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const photosApi = createApi({
        reducerPath: 'photosApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/photos' }),
        endpoints: (builder) => ({
          getAllPhotos :  builder.query({
            query: () => ``,
        }),
    }),
})
export const { useGetAllPhotosQuery } = photosApi
      