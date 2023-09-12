import { createEntityAdapter } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";

const brandAdapter = createEntityAdapter();

const initialState = brandAdapter.getInitialState();
interface ListResponse<T> {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: T[]
  }
const lim: number = 15;

const extendedApiBrandSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaginated: builder.query<ListResponse<string>, number| void>({
      query: (page: number = 1) => ({
        url: `/brands?limit=${lim}&page=${page}`,
        method: "GET",
      }),
    }),
  }),
});

export const {} = extendedApiBrandSlice;
