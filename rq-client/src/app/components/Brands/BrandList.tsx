import { getBrands, getPaginatedBrands } from '@/utils/api';
import { PaginatedBrands } from '@/utils/types';
import { brandsQuery, paginatedBrandsQuery } from '@/utils/userQuery_consts';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react'

const buttonStyle = "h-12 w-36 rounded-md   "
const buttonReactiveStyle = "bg-black text-white hover:scale-105 active:bg-white active:text-black transition-transform "
const buttonDisabledStyle = "bg-zinc-300 cursor-default"


const BrandList = () => {
  const [page,setPage] = React.useState<number>(1)
  const limit = 8;
  //const { data: brands, isError,error,isFetching, failureCount } = useQuery<string[],AxiosError>({ refetchOnWindowFocus:false,queryKey:brandsQuery, queryFn: getBrands, initialData: [] });
  const { data, isError,error,isFetching, failureCount } = useQuery<PaginatedBrands,AxiosError>(paginatedBrandsQuery,()=>getPaginatedBrands(limit,page),{ refetchOnWindowFocus:false });
  if(isError || !data) return <div></div>
  if(isFetching) return <div></div>
  const { brands, has_next: hasNext } = data;
  
  return (
    <div className='h-[48rem] mt-12  col-span-full flex flex-col items-center px-4 '>
      <h3 className='text-3xl font-semibold mb-4'>Brands</h3>
      <ul className='w-96 py-6 px-4 text-3xl font-semibold bg-zinc-100 rounded-lg overflow-hidden'>
        {brands.map(e => <li key={e}>{e}</li>)}
      </ul>
      <div className='mt-4 text-xl font-semibold  items-center flex gap-8'>
        <button  className={`${buttonStyle} ${page != 1 ? buttonReactiveStyle : buttonDisabledStyle }`}>Previous</button>
        <span className='w-8 text-center'>{page}</span>
        <button  className={`${buttonStyle} ${hasNext ? buttonReactiveStyle : buttonDisabledStyle } `}>Next</button>
      </div>
    </div>
  )
}

export default BrandList