import React from 'react'
import Image from 'next/image'

import logo from "../public/logo.png"
function Navbar () {
  return (
    <>
      <header className=" text-black body font-sans">


        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  items-center">

          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image className="container flex" src={logo} alt="Banner" width={100} height={100} />
          </a>

          <nav className="md:ml-auto flex flex-wrap item-center text-base justify-center"  >

            <a className="mr-20  text-black text-bold"> My Vision </a>
            <a className="mr-20 text-black text-bold"> Services </a>
            <a className="mr-20 text-black text-bold"> Work </a>
            <a className="mr-20 text-black text-bold"> About Us</a>
           
          </nav>




        </div>
      </header>


    </>


  )
}

export default Navbar