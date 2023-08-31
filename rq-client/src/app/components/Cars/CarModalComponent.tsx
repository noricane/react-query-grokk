"use client"
import React from 'react'

const CarModalComponent = (
    {id,manufacturer,model,price,img,description,wiki}:
    {id: number;manufacturer: string;model: string;price: number;img: string;description: string;wiki:string}) => {
  return (
    <div className='w-full h-full flex flex-col'>

      <div className='utmd:w-full utsm:h-48 utmd:h-72 w-full h-96 rounded-3xl overflow-hidden mb-4'>
        <img draggable={false} className=' object-center w-[inherit] h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} />
      </div>

      <h1 className='font-semibold text-zinc-800 text-2xl'>{model}</h1>
      <h2 className='font-semibold text-zinc-700 text-xl'>{manufacturer}</h2>

      <div className='my-2'>
      {description}
      </div>
      <a target='_blank' className='bg-black  text-white w-28 h-12 rounded-md flex justify-center items-center' 
        href={wiki}>Read More</a>
    </div>
  )
}

export default CarModalComponent