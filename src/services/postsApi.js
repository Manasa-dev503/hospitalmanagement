import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const postsApi = createApi({
        reducerPath: 'postsApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/posts' }),
        endpoints: (builder) => ({
          getAllPosts :  builder.query({
            query: () => ``,
        }),
        getPostsDetailsById : builder.query({
          query: (id) => `/${id}`,
        })
    }),
})
export const { useGetAllPostsQuery,useGetPostsDetailsByIdQuery } = postsApi
      