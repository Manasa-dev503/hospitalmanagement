import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const commentsApi = createApi({
        reducerPath: 'commentsApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/comments' }),
        endpoints: (builder) => ({
          getAllComments :  builder.query({
            query: () => ``,
        }),
    }),
})
export const { useGetAllCommentsQuery } = commentsApi
      