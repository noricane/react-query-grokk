import { DefinedUseQueryResult, UseQueryOptions } from '@tanstack/react-query'
import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa';
import Spinner from '../Misc/Spinner';
import { useQuery } from '@tanstack/react-query'
import { Car } from '@/utils/types'
import { AxiosError } from 'axios'
import { lastSelectedQuery } from '@/utils/userQuery_consts'
import { getLastSelected } from '@/utils/api'

const LastSelectedComponent = () => {
  const { data:lastSelected, isError,error,isFetching, failureCount } = useQuery<Car,AxiosError>(lastSelectedQuery, getLastSelected,{
    refetchOnWindowFocus:false, 
    initialData:{} as Car, 
    retry: (failureCount, error:AxiosError) => {

      return failureCount < 4 && error.response?.status !== 404 && error.response?.status !== 418  
             
    },
  });

    let content;
    if (isError) content = (
      <div className='h-48 w-[25rem] flex flex-col items-center justify-center bg-zinc-100 rounded-lg overflow-hidden px-4'>
        {/* Here one should check if it's good practice to display error message to user,
            but in this case this is no problem */}
        
       { 
        error.response?.status == 418 /* HTTP I'm teapot */ ? 
          <div className='font-semibold text-lg'>Please select a car from the list below to get started</div>: 
          <>
            <FaRegTimesCircle color="red" size={50}/>
            <div className='font-semibold text-lg'>Error getting the last selected car from the server</div>
            <div className='font-semibold text-lg'>{(error.response?.data as string)}</div>
          </>
          }
      </div>);
    
      else if (failureCount > 0) content = (
        <div className='h-48 w-[25rem] flex flex-col items-center justify-center bg-zinc-100 rounded-lg overflow-hidden'>

          <Spinner error={true}/>
          <div className='text-red-600 font-semibold'>Failed, trying again</div>
        </div>
    );
    
    else if (isFetching) content = (
      <div className='h-48 w-[25rem] flex bg-zinc-100 flex-col items-center justify-center rounded-lg overflow-hidden'>
        <Spinner error={!true}/>
        <div className='font-semibold'>Loading last selected</div>
        
      </div>);
      
    else content = (
      <section className='h-48 w-[25rem] flex bg-zinc-100 rounded-lg overflow-hidden'>
        <img draggable={false} className=' object-center h-48 w-64 object-cover' src={lastSelected.img} alt={`An image of a ${lastSelected.manufacturer} ${lastSelected.model}`} />
        <div className='flex flex-col justify-center w-36'>
          <h2 className='text-zinc-900 font-semibold'>{lastSelected.model}</h2>
          <h3 className='text-zinc-700'>{lastSelected.manufacturer}</h3>
        </div>
      </section>)
  return (
    <div className='h-64 col-span-8 flex flex-col items-center justify-center w-full text-center  rounded-xl'>
      <h1 className='text-2xl font-semibold'>Last Selected Car</h1>
      {content}
      </div>
  )
}

export default LastSelectedComponent