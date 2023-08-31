import { Car } from '@/utils/types'
import Image from 'next/legacy/image';
import React from 'react'

const CarComponent = (
    {id,manufacturer,model,price,img,description,}:
    {id: number;manufacturer: string;model: string;price: number;img: string;description: string;}) => {
  return (
   <article className='sm:col-span-6 lg:col-span-3'>
        <h1>{model}</h1>
        <h2>{manufacturer}</h2>
        <Image layout='fill' src={img} alt={`An image of a ${manufacturer} ${model}`} />
   </article>
  )
}

export default CarComponent