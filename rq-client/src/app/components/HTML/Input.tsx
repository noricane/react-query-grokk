import React from 'react'

const Input = (
  {label,name,placeholder="",value, setNewVal,type="input"}:
  {label:string,name:string,placeholder?:string,value:string,setNewVal:Function,type?:"textarea"|"input"}) => {

  if(type === "textarea"){
    <label className='text-xl font-semibold h-12' htmlFor={name}>
      {label}:&nbsp;
      <textarea className='h-full font-normal px-2 rounded-lg outline-zinc-600 bg-zinc-100 '
      name={name} 
      id={name} 
      value={value}
      onChange={
          (e:React.ChangeEvent<HTMLTextAreaElement>) => {
              setNewVal(e.target.value)
          }
      } placeholder={placeholder} />
    </label>
      }
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
                setNewVal(e.target.value)
            }
        } placeholder={placeholder} />
    </label>
  )
}

export default Input