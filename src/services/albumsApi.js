import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const albumsApi = createApi({
        reducerPath: 'albumsApi',
        baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:4000/albums' }),
        endpoints: (builder) => ({
          getAllAlbums :  builder.query({
            query: () => ``,
        }),
        getAlbumsDetailsById : builder.query({
          query: (id) => `/${id}`,
        })
    }),
})
export const { useGetAllAlbumsQuery,useGetAlbumsDetailsByIdQuery } = albumsApi
      