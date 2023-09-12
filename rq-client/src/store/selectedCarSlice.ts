import { FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { EntityAdapter, createEntityAdapter } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import { Car } from "@/utils/types";

const selectedCarAdapter:EntityAdapter<Car> = createEntityAdapter({})
const initialState = selectedCarAdapter.getInitialState()


const extendedApiCarSlice = apiSlice.injectEndpoints({

    endpoints:builder => ({ 
        getSelectedCar: builder.query<Car,void>({
            query:()=>`/user/get_last_clicked`,
            providesTags:[{type: 'SelectedCar',id:"ITEM"}],

        }),
        setSelectedCar: builder.mutation<void,number>({
            query:(car_id:number)=>({
                url:`/user/set_last_clicked`,
                method:"PATCH", 
                body:{car_id}
            }),
            invalidatesTags: ['SelectedCar']
        })
    }),
})

export const {useGetSelectedCarQuery,useSetSelectedCarMutation} = extendedApiCarSlice

// returns the query result object
export const getSelecterCarResult = extendedApiCarSlice.endpoints.getSelectedCar.select()
