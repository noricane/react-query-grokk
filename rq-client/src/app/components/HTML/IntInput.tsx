import React from 'react'

const IntInput = (
    {label,name,placeholder="",value, setNewVal}:
    {label:string,name:string,placeholder?:string,value:number,setNewVal:Function}) => {
  return (
    <label className='text-xl font-semibold h-12' htmlFor={name}>
        {label}:&nbsp;
        <input className='h-full font-normal px-2 rounded-lg outline-zinc-600 bg-zinc-100 '
        type="text"
        name={name} 
        id={name} 
        value={value}
        onChange={
            (e:React.ChangeEvent<HTMLInputElement>) => {
                if(!isNaN(parseInt(e.target.value)))
                setNewVal(parseInt(e.target.value))
            }
        } placeholder={placeholder} />
    </label>
  )
}

export default IntInput