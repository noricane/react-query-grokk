import React from 'react'
import LastSelectedComponent from '../User/LastSelectedComponent'
import NewWhipComponent from '../Cars/NewWhipComponent'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Car } from '@/utils/types'
import { AxiosError } from 'axios'
import { lastSelectedQuery } from '@/utils/userQuery_consts'
import { getLastSelected, setLastSelected } from '@/utils/api'

const Header = () => {
    
  const lastSelecteduseQueryState = useQuery<Car,AxiosError>(lastSelectedQuery, getLastSelected,{
    refetchOnWindowFocus:false, 
    initialData:{} as Car, 
    retry: (failureCount, error) => {
      return failureCount < 4 && (error as AxiosError).response?.status !== 404
    },
  });
  
    
  return (
    <>
    <LastSelectedComponent data={lastSelecteduseQueryState}/>
      <NewWhipComponent />
      
      <input type="text" placeholder="might implement search here, maybe." className="text-lg px-2 mt-1 col-span-full h-12  rounded-lg outline-zinc-700" />
      </>
  )
}

export default Header