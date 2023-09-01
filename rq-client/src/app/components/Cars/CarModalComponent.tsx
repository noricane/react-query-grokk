"use client"
import { SlideButtons } from '@/utils/types';
import React from 'react'
import { FaAngleLeft ,FaAngleRight } from 'react-icons/fa';

const CarModalComponent = (
    {id,manufacturer,model,price,img,description,wiki,changeDisplayedCar}:
    {id: number;manufacturer: string;model: string;price: number;img: string;description: string;wiki:string,changeDisplayedCar:Function}) => {
  return (
    <>
      <button onClick={()=>changeDisplayedCar(SlideButtons.DECREASE)} className=' md:scale-125 fixed w-10 h-10 align-middle utmd:left-1  utlg:left-12  utxl:left-[10%] xl:left-[25%] rounded-full bg-white outline-white flex justify-center items-center border-2 border-black'><FaAngleLeft color={"black"} size={40}/></button>
      <button onClick={()=>changeDisplayedCar(SlideButtons.INCREASE)} className=' md:scale-125 fixed w-10 h-10 align-middle utmd:right-1 utlg:right-12  utxl:right-[10%] xl:right-[25%] rounded-full bg-white outline-white flex justify-center items-center border-2 border-black'><FaAngleRight color={"black"} size={40}/></button>
      <div className='w-full h-full flex flex-col'>
        <div className='utmd:w-full utsm:h-48 utmd:h-72 w-full h-96 rounded-3xl overflow-hidden mb-4'>
          <img draggable={false} className='select-none object-center w-[inherit] h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} />
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'> 
            <h1 className='font-semibold text-zinc-800 text-2xl'>{model}</h1>
            <h2 className='font-semibold text-zinc-700 text-xl'>{manufacturer}</h2>
          </div>
          <h3 className='text-xl font-semibold'>${price.toLocaleString("en-US")}</h3>
        </div>

        <div className='my-2'>
          {description}
        </div>
        <a target='_blank' className='bg-black  text-white w-28 h-12 rounded-md flex justify-center items-center' 
          href={wiki}>Read More</a>
      </div>
    </>
  )
}

export default CarModalComponent