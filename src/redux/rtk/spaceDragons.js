import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const dragonsApi = createApi({
    reducerPath:"dragonsApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://api.spacexdata.com'}),
    endpoints:builder=>({
        getDragons:builder.query({
            query:(id)=>`/v4/dragons`
        })
    })
})

export const { useGetDragonsQuery } = dragonsApi

