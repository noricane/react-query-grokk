import { Car } from '@/utils/types'
import React from 'react'

const CarComponent = ({car}:{car:Car}) => {
  return (
   <article>
        <h1>{car.model}</h1>
        <h2>{car.manufacturer}</h2>
   </article>
  )
}

export default CarComponent