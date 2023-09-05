"use client"
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full [&>button]:h-12 [&>button]:w-24 p-1 gap-4 justify-center bg-red-200 flex'>
        <Link href={"/"}     className='bg-black text-white rounded-xl'>Home</Link>
        <Link href={"/test"} className='bg-black text-white rounded-xl'>Test</Link>
    </div>
  )
}

export default Nav