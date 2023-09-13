"use client"

import { useQuery,useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react'
import Spinner from '../Misc/Spinner';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useGetPaginatedBrandsQuery } from '../../store/brandSlice';


const buttonStyle = " h-12 w-36 rounded-md "
const buttonReactiveStyle = " bg-black text-white hover:scale-105 active:bg-white active:text-black transition-transform "
const buttonDisabledStyle = " bg-zinc-300 cursor-default "

const notSuccessContainerStyle = " px-4 text-xl h-full w-96 py-6 px-4 text-3xl font-semibold bg-zinc-100 rounded-lg overflow-hidden flex flex-col justify-center items-center "
const limit = 15;




const BrandList = () => {
  const queryClient = useQueryClient()
  const [page,setPage] = React.useState<number>(1)
  const { data, isLoading, isFetching,isError,error } = useGetPaginatedBrandsQuery(page)
  const {brands, has_next:hasNext} = !isLoading && data != null ? data  : {brands:[],has_next:false}

  // is this blasphemy?? 
  //The redux cache will prevent refetches if we already have the data cached
  const _ =  useGetPaginatedBrandsQuery(page +1) 


  let content;
  
  if(isError) content = (
    <div className={`text-red-600 ${notSuccessContainerStyle}`}>
      <FaRegTimesCircle size={70}/>
      <span >Couldn&apos;t get brands, try again later</span>
    </div>);

  
  else if(isFetching) content = (
      <div className={`${notSuccessContainerStyle}`}>
        <Spinner error={false}/>
        Loading...
      </div>);
  else content = (
      <>
        <ul className='w-96 utsm:w-56 mx-auto h-[36rem]  py-6 px-4 text-3xl font-semibold bg-zinc-100 rounded-lg overflow-y-scroll'>
          {brands.map(e => <li key={e}>{e}</li>)}
        </ul>
        <div className='mt-4 text-xl utsm:flex-col font-semibold  items-center flex gap-8'>
          <button  
            disabled={!(page > 1)|| isFetching} 
            className={`${buttonStyle} ${page != 1 ? buttonReactiveStyle : buttonDisabledStyle }`}
            onClick={()=>{setPage(prev => prev-1)}}
            >Previous</button>
          <span className='w-8 text-center'>{page}</span>
          <button  
            disabled={!hasNext || isFetching} 
            className={`${buttonStyle} ${hasNext ? buttonReactiveStyle : buttonDisabledStyle } `}
            onClick={()=>{
               setPage(prev =>{
                return prev+1});     
              }}
            >Next</button>
        </div>
      </>);
  
  return (
    <div className='h-[48rem] mt-12  col-span-full flex flex-col items-center px-4 '>
      <h3 className='text-3xl font-semibold mb-4'>Brands</h3>
      {content}
    </div>
  )
}

export default BrandList