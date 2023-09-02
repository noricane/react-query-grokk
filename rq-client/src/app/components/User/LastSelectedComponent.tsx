import { DefinedUseQueryResult, UseQueryOptions } from '@tanstack/react-query'
import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa';
import Spinner from '../Misc/Spinner';
import { Car } from '@/utils/types';

const LastSelectedComponent = ({data}:{data:DefinedUseQueryResult<Car, unknown>}) => {
    const {data:lastSelected, isError,error,isFetching, failureCount } = data

    
    if (isError) return (
        <div className='h-48 col-span-full flex flex-col items-center justify-center w-full text-center bg-white rounded-xl'>
          <FaRegTimesCircle color="red" size={50}/>
          {/* Here one should check if it's good practice to display error message to user,
              but in this case this is no problem */}
          <div>Error getting the last selected car from the server</div>
          <div>{(error as unknown&{message:string}).message}</div>
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
    <div className='h-48 col-span-full flex items-center justify-center w-full text-center bg-white rounded-xl'>{lastSelected.model}</div>
  )
}

export default LastSelectedComponent