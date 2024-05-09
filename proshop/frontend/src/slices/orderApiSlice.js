import React from "react"
import { apiSlice } from "./apiSlice"
import { ORDERS_URL } from "../constants"

export const orderApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    //
    getOrdersDetails: builder.query({
      query: (orderId) => ({ url: `${ORDERS_URL}/${orderId}` }),
      keepUnusedDataFor: 5,
    }),
  }),
})
export const { useCreateOrderMutation } = orderApislice
