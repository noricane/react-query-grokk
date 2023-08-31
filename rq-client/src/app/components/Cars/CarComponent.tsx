import { Car } from '@/utils/types'
import Image from 'next/legacy/image';
import React from 'react'

const CarComponent = (
    {id,manufacturer,model,price,img,description,}:
    {id: number;manufacturer: string;model: string;price: number;img: string;description: string;}) => {
  return (
   <article className='hover:scale-105 active:scale-100 transition-transform sm:col-span-6 lg:col-span-3 h-96 bg-zinc-50 select-none !cursor-pointer rounded-lg overflow-hidden'>
        <div className='w-auto h-64'>
            <img draggable={false} className=' object-center h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} />
            {/* <Image width={720} height={1280} className=' object-fill object-center ' src={img} alt={`An image of a ${manufacturer} ${model}`} /> */}
        </div>
        <section className='w-full h-32 p-2'>
            <h1 className='font-semibold text-zinc-800 text-2xl'>{model}</h1>
            <h2 className='font-semibold text-zinc-700 text-xl'>{manufacturer}</h2>
            <h2 className='font-semibold text-zinc-600 '>{`$${price.toLocaleString()}`}</h2>
        </section>
   </article>
  )
}

export default CarComponent