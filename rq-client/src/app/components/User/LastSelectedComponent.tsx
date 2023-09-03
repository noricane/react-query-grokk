import { DefinedUseQueryResult, UseQueryOptions } from '@tanstack/react-query'
import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa';
import Spinner from '../Misc/Spinner';
import { Car } from '@/utils/types';
import { AxiosError } from 'axios';

const LastSelectedComponent = ({data}:{data:DefinedUseQueryResult<Car, AxiosError>}) => {
    const {data:lastSelected, isError,error,isFetching, failureCount } = data

    
    if (isError) return (
        <div className='h-48 col-span-full flex  flex-col items-center justify-center w-full text-center bg-white rounded-xl'>
          <FaRegTimesCircle color="red" size={50}/>
          {/* Here one should check if it's good practice to display error message to user,
              but in this case this is no problem */}
          <div className='font-semibold text-lg'>Error getting the last selected car from the server</div>
          <div className='font-semibold text-lg'>{(error.response?.data as string)}</div>
        </div>);
    
      if (failureCount > 0) return (
        <div className='h-48 col-span-full flex flex-col items-center justify-center w-full text-center bg-white rounded-xl'>

          <Spinner error={true}/>
          <div>Failed, trying again</div>
        </div>
    );
    
      if (isFetching == true) return (
        <div className='h-48 col-span-full flex flex-col items-center justify-center w-full text-center bg-white rounded-xl'>

          <Spinner error={!true}/>
          Loading last selected
        </div>);
  return (
    <div className='h-64 col-span-6 flex flex-col items-center justify-center w-full text-center  rounded-xl'>
      <h1 className='text-2xl font-semibold'>Last Selected Car</h1>
      <section className='h-48 flex bg-zinc-100 rounded-lg overflow-hidden'>
      { <img draggable={false} className=' object-center h-48 w-64 object-cover' src={lastSelected.img} alt={`An image of a ${lastSelected.manufacturer} ${lastSelected.model}`} />}
        <div className='flex flex-col justify-center w-36'>
          <h2>{lastSelected.model}</h2>
          <h3>{lastSelected.manufacturer}</h3>
        </div>
      </section>
      </div>
  )
}

export default LastSelectedComponent