"use client"
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full [&>button]:h-12 [&>button]:w-24 p-1 gap-4 justify-center bg-zinc-300 flex'>
        <Link href={"/"}     className='bg-black text-white px-4 py-2 rounded-md hover:invert active:scale-90'>Home</Link>
        <Link href={"/test"} className='bg-black text-white px-4 py-2 rounded-md hover:invert active:scale-90'>Test</Link>
    </div>
  )
}

export default Nav