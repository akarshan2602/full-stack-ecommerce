import {apiSlice} from './apiSlice'
import { USERS_URL } from '../constants'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`, //apending it to http://locahost:5000//api/users
                method: "POST",
                body: data,
            })
        })
    })
})



export const {useLoginMutation} = userApiSlice

