"use client"
import { Car } from '@/utils/types'
import Image from 'next/legacy/image';
import React from 'react'

const CarComponent = (
    {id,manufacturer,model,price,img,description,onClick,wiki}:
    {id: number;manufacturer: string;model: string;price: number;img: string;description: string;onClick:React.MouseEventHandler<HTMLElement>,wiki:string}) => {
  return (
   <article className=' hover:scale-105  transition-transform relative utsm:col-span-full sm:col-span-6 lg:col-span-3 h-96'>
    <div  onClick={onClick} className=' active:scale-100 transition-transform  bg-zinc-50 select-none !cursor-pointer rounded-lg overflow-hidden'>
        <div className='w-full h-64'>
           { <img draggable={false} className=' object-center w-[inherit] h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} />}
            {/* <Image width={720} height={1280} className=' object-center w-[inherit] h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} /> */}
        </div>
        <div className='flex items-center px-1'>
        <section className='w-full h-32 p-2 relative'>
            <h1 className='font-semibold text-zinc-800 text-2xl'>{model}</h1>
            <h2 className='font-semibold text-zinc-700 text-xl'>{manufacturer}</h2>
            <h2 className='font-semibold text-zinc-600 '>{`$${price.toLocaleString("en-US")}`}</h2>
      
        </section>
        
        </div>
    </div>
    <button className='w-36 active:bg-red-200 h-12 absolute bottom-4 right-4 bg-black rounded-lg text-white font-semibold' onClick={(e)=>{e.stopPropagation();console.log("Send to server")}}>
            Select Car
        </button>
   </article>
  )
}

export default CarComponent