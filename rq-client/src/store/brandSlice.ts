import { createEntityAdapter } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";

const brandAdapter = createEntityAdapter();

const initialState = brandAdapter.getInitialState();

const lim: number = 15;

const extendedApiBrandSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaginatedBrands: builder.query<{brands:string[],has_next:boolean}, number| void>({
      query: (page: number = 1) => ({
        url: `/brands_paginated?limit=${lim}&page=${page}`,  
        method: "GET",
      }),
    }),
  }),
});

export const {useGetPaginatedBrandsQuery} = extendedApiBrandSlice;
