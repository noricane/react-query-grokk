
import { createEntityAdapter } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import { Car } from "@/utils/types";


const carAdapter = createEntityAdapter({})
const initialState = carAdapter.getInitialState()

const extendedApiCarSlice = apiSlice.injectEndpoints({
    endpoints:builder => ({ 
        getAll: builder.query<Car[],void>({
            query:()=>`/cars`,
            providesTags:[{type: 'Cars',id:"LIST"}],
    /*         transformResponse: (resp) => {
                return  carAdapter.setAll(initialState,resp)
            } */
        }),
        addCar: builder.mutation<void,Car>({
            query:(c:Car)=>({
                url:`/cars/new`,
                method:"POST",
                body:{car:c}
            }),
            invalidatesTags: ['Cars']
        })
    }),
})

export const {useAddCarMutation,useGetAllQuery} = extendedApiCarSlice