"use client"
import React, { useEffect, useRef, useState } from 'react'
import { FaTimes,  } from 'react-icons/fa'

const ModalPanel = (
    {loading,children,containerStyle,buttonText,name,isOpened,setIsOpened}:
    {loading?:boolean,children:React.ReactNode,buttonText?:any,containerStyle:string,name:string,isOpened:boolean,setIsOpened:Function}
    ) => {
   

    const ref = useRef<HTMLDialogElement>(null)
    const innerDiv = useRef<HTMLDivElement>(null)

   
    
   const close = () => {
        if(!isOpened) return;
        setIsOpened(false)
    }
    
    const stopProp = (e: MouseEvent)=>{e.stopPropagation()}
    /* Whenever the isOpened state changes, execute the following code depending on the
    boolean value of the state*/
    useEffect(() => {isOpened ? ref.current?.showModal() : ref.current?.close()},[isOpened])
    useEffect(() => {
        innerDiv.current?.addEventListener("mousedown",stopProp)
        window.addEventListener("mousedown",close );
        return () => {
            innerDiv.current?.removeEventListener("mousedown",stopProp)
            window.removeEventListener("mousedown", close);
        };
    }, [close,stopProp]);
   


  return (
    <>

    <dialog className='mx-auto my-auto rounded-xl outline-none  z-10'  ref={ref}>
        <button className='outline-none scale-125 active:scale-125 hover:scale-150 absolute z-10 right-4 top-4' onClick={() => setIsOpened(false)}><FaTimes /></button>
        <div ref={innerDiv} className={`min-h-[8rem] min-w-[12rem] relative px-6 py-8 flex  ${containerStyle} justify-center`} >
            {children}
        </div>
    </dialog>
    </>
    
  )
}

export default ModalPanel