import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const dragonApi = createApi({
    reducerPath:"dragonApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://api.spacexdata.com'}),
    endpoints:builder=>({
        getDragon:builder.query({
            query:()=>'/v4/dragons/5e9d058759b1ff74a7ad5f8f'
        })
    })
})

export const { useGetDragonQuery } = dragonApi

