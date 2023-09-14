"use client"
import React from 'react'
import API from '@/store/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <ApiProvider api={API}>
        {children}
    </ApiProvider>
  )
}

export default Layout