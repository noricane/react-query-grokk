import React from 'react'
import Input from '../HTML/Input';
import IntInput from '../HTML/IntInput';
import { Car } from '@/utils/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCar } from '@/utils/api';
import { carsQuery } from '@/utils/userQuery_consts';


const NewWhipForm = () => {
    const [manufacturer,setManufacturer] = React.useState<string>("")
    const [model,setModel] = React.useState<string>("")
    const [price,setPrice] = React.useState<number>(0)
    const [img,setImg] = React.useState<string>("")
    const [description,setDescription] = React.useState<string>("")
    const [wiki,setWiki] = React.useState<string>("")

    const [error,setError] = React.useState<[error:boolean,message:string]>([false,""])

    const queryClient = useQueryClient()
    const setLastSelectedMutation = useMutation(addCar,{
      onSuccess:()=>{
        queryClient.invalidateQueries(carsQuery)
      }
    })
    
    const stringList = [manufacturer,model,img,description,wiki]
    const validate  = price > 0 && stringList.filter(e => e === "").length === 0;
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(!validate) {
          setError([true,"Fields cannot be empty"])
          setTimeout(()=>{
            setError([false,""])
          },5000)
          return
        }
        console.log("submitted");
        //use query to mutate the update, invalidate carlsit upon submission
        const c:Car = {
          id: -1,
          manufacturer: manufacturer,
          model: model,
          price: price,
          img: img,
          description: description,
          wiki: wiki,
        }
        setLastSelectedMutation.mutate(c)
    }
  return (
    <div className='grid grid-cols-10 w-[48rem] h-[36rem] '>
        <div className=' col-span-5'>
          {img && <img draggable={false} className='rounded-md select-none object-center w-[inherit] h-[inherit] object-cover' src={img} alt={`An image of a ${manufacturer} ${model}`} />}
            
        </div>
        <form className=' col-span-5 h-[inherit] flex flex-col items-center gap-4 justify-between py-4' onSubmit={handleSubmit}>
            <div className='flex flex-1 justify-around items-end flex-col gap-4'>
              <Input    value={manufacturer} label="Manufacturer" name="manufacturer" setNewVal={setManufacturer} placeholder='' />
              <Input    value={model} label="Model" name="model" setNewVal={setModel} placeholder='' />
              <IntInput value={price} label="Price" name="price" setNewVal={setPrice} placeholder='' />
              <Input    value={img} label="Image" name="img" setNewVal={setImg} placeholder='' />
              <Input    value={description} label="Description" name="desc" type="textarea" setNewVal={setDescription} placeholder='' />
              <Input    value={wiki} label="Wiki Link" name="wikilink" setNewVal={setWiki} placeholder='' />
            </div>
            {error[0] && <div className='w-full text-red-600'>{error[1]}</div>}
            <button type='submit' className='w-36 active:bg-white active:text-black h-12 transition-transform bg-black rounded-lg text-white font-semibold'
            >Submit</button>
        </form>
        
    </div>
  )
}

export default NewWhipForm