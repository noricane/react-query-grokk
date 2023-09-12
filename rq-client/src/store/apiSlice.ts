import { url } from "@/utils/global";
import { Car } from "@/utils/types";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./store_utils";


const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:`${url}`}),
    tagTypes:[...Object.values(TAG_TYPES)],
    endpoints:(builder) => ({
        
    })
})

export default apiSlice