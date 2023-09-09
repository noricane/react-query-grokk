"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import StoreContext from '../context/StoreContext';
import 
const Layout = ({children}:{children:React.ReactNode}) => {
  const [queryClient,] = React.useState(()=>new QueryClient()) 
  const store = configureStore()
  return (
    <StoreContext.Provider value={StoreContext}>
      <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
    </StoreContext.Provider> 
  )
}

export default Layout