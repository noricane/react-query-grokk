
import { PaginatedBrands } from '@/utils/types';
import { paginatedBrandsQuery } from '@/utils/userQuery_consts';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react'
import Spinner from '../Misc/Spinner';
import { FaRegTimesCircle } from 'react-icons/fa';
import { url } from '@/utils/global';

const buttonStyle = " h-12 w-36 rounded-md "
const buttonReactiveStyle = " bg-black text-white hover:scale-105 active:bg-white active:text-black transition-transform "
const buttonDisabledStyle = " bg-zinc-300 cursor-default "

const notSuccessContainerStyle = " px-4 text-xl h-full w-96 py-6 px-4 text-3xl font-semibold bg-zinc-100 rounded-lg overflow-hidden flex flex-col justify-center items-center "
const limit = 15;

const BrandList = () => {


  const getPaginatedBrands = (page = 1) => fetch(`${url}/brands_paginated?limit=${limit}&page=${page}`).then((res) => res.json())
  
  const [page, setPage] = React.useState(1)

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery<PaginatedBrands,AxiosError>({
    queryKey: [...paginatedBrandsQuery, page],
    queryFn: () =>getPaginatedBrands(page),
    keepPreviousData : true
  })

  return (
    <div className='bg-red-200 col-span-full'>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.brands.map(project => (
            <p key={project}>{project}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPreviousData && data?.has_next) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.has_next}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  )
}

export default BrandList