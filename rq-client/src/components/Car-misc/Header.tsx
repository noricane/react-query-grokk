import React from 'react'
import LastSelectedComponent from '../User/LastSelectedComponent'
import NewWhipComponent from '../Cars/NewWhipComponent'

const Header = () => {
  return (
    <>
      <LastSelectedComponent/>
      <NewWhipComponent />
      <input type="text" placeholder="might implement search here, maybe." className="text-lg px-2 mt-1 col-span-full h-12  rounded-lg outline-zinc-700" />
    </>
  )
}

export default Header