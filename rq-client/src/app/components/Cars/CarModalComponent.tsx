"use client"
import React from 'react'

const CarModalComponent = (
    {id,manufacturer,model,price,img,description,}:
    {id: number;manufacturer: string;model: string;price: number;img: string;description: string;}) => {
  return (
    <div className='w-full h-full flex bg-red-200 flex-col'>

      <div className='utmd:w-full utmd:h-48 w-full h-96'>
        <img draggable={false} className=' object-center w-[inherit] h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} />
      </div>

        <h1>{model}</h1>
        <h2>{manufacturer}</h2>


      {description}
      <a className='bg-black  text-white w-28 h-12 rounded-md flex justify-center items-center' 
        href={"wikiLink"}>Read More</a>
    </div>
  )
}

export default CarModalComponent