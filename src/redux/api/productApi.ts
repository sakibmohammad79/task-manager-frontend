/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          products: response,
        };
      },
    
    }),
    getsingleprouduct: build.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          products: response,
        };
      },
    
    }),
    deleteProduct: build.mutation({
      query: (id: string) => ({
         url: `/products/${id}`,
        method: "DELETE",
      }),
     
    }),
  }),
});

export const { useGetAllProductsQuery, useGetsingleprouductQuery, useDeleteProductMutation } = productApi;
