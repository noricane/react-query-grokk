import { DefinedUseQueryResult, UseQueryOptions } from '@tanstack/react-query'
import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa';
import Spinner from '../Misc/Spinner';
import { Car } from '@/utils/types';
import { AxiosError } from 'axios';

const LastSelectedComponent = ({data}:{data:DefinedUseQueryResult<Car, AxiosError>}) => {
    const {data:lastSelected, isError,error,isFetching, failureCount } = data

    let content;
    if (isError) content = (
      <div className='h-48 w-[25rem] flex flex-col items-center justify-center bg-zinc-100 rounded-lg overflow-hidden px-4'>
        <FaRegTimesCircle color="red" size={50}/>
        {/* Here one should check if it's good practice to display error message to user,
            but in this case this is no problem */}
        <div className='font-semibold text-lg'>Error getting the last selected car from the server</div>
        <div className='font-semibold text-lg'>{(error.response?.data as string)}</div>
      </div>);
    
      else if (failureCount > 0) content = (
        <div className='h-48 w-[25rem] flex flex-col items-center justify-center bg-zinc-100 rounded-lg overflow-hidden'>

          <Spinner error={true}/>
          <div>Failed, trying again</div>
        </div>
    );
    
    else if (isFetching) content = (
      <div className='h-48 w-[25rem] flex bg-zinc-100 flex-col items-center justify-center rounded-lg overflow-hidden'>
        <Spinner error={!true}/>
        Loading last selected
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