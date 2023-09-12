"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import StoreContext from '../context/StoreContext';
import { configureStore } from '@reduxjs/toolkit';



import API from '@/store/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

const Layout = ({children}:{children:React.ReactNode}) => {
  const [queryClient,] = React.useState(()=>new QueryClient()) 

  return (
    <ApiProvider api={API}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ApiProvider>
  )
}

export default Layout