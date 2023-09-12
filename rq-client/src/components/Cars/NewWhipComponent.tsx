"use client"
import React from 'react'
import ModalPanel from '../HTML/ModalPanel'
import NewWhipForm from './NewWhipForm'

const NewWhipComponent = () => {
    const [open,setOpen] = React.useState<boolean>(false)
  return (
    <>
    <div className=" col-span-full md:col-span-4  flex items-center justify-center w-full">
        <button onClick={()=>setOpen(true)} className='w-36  active:bg-white active:text-black h-12 transition-transform bg-black rounded-lg text-white font-semibold'>
            Add New Whip
        </button>
          
    </div> 
    <ModalPanel containerStyle={''} name={''} isOpened={open} setIsOpened={()=>{setOpen(false)}}>
        <NewWhipForm/>
    </ModalPanel>
    </>
  )
}

export default NewWhipComponent