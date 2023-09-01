import { DefinedUseQueryResult, UseQueryOptions } from '@tanstack/react-query'
import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa';
import Spinner from '../Misc/Spinner';

const LastSelectedComponent = ({data}:{data:DefinedUseQueryResult<number, unknown>}) => {
    const {data:lastSelected, isError,error,isFetching, failureCount } = data
    if (isError) return (
        <div className='flex-1 w-screen flex flex-col justify-center items-center'>
          <FaRegTimesCircle color="red" size={100}/>
          {/* Here one should check if it's good practice to display error message to user,
              but in this case this is no problem */}
          <div>{(error as unknown&{message:string}).message}</div>
        </div>);
    
      if (failureCount > 0) return (
        <>
          <Spinner />
          <div>Failed, trying again</div>
        </>
    );
    
      if (isFetching == true) return (
        <>
          <Spinner />
          Loading last selected
        </>);
  return (
    <div>{lastSelected}</div>
  )
}

export default LastSelectedComponent