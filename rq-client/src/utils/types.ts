export type Car = {
  id:number
  manufacturer: string
  model: string
  price: number
  img: string
  description:string
  wiki:string
}
export type PaginatedBrands = {
  brands:string[],
  has_next:boolean
}
  

export enum SlideButtons {
  INCREASE,
  DECREASE
}