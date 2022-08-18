import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "../public/logo.png"
function Navbar () {
  return (
    <>



      <header className="  flex-none  flex justify-center items-center px-10 py-1 mx-10 my-1   sticky top-0 z-50 ">


        <Image className="flex-auto   my-10  mx-10 items-center justify-center w-1/5" src={logo} alt="Banner" width={100} height={100} />



        <nav className=" px-1 mx-1 py-1 my-1  container flex flex-row-reverse " >

          <Link href="#hire" >
            <a className=" flex   my-5 border-current  bg-green-50  rounded-lg mx-5 items-center  px-1 py-1 hower:border-red-900 text-2xl text-black text-bold font-mono" >Hire Me</a>
          </Link>
          <Link href="#work">
            <a className=" flex   my-5 bg-green-50  border-current  rounded-lg mx-5 items-center  px-1 py-1 hower:border-red-900 text-2xl text-black text-bold font-mono" >Work</a>
          </Link>
          <Link href="#services">
            <a className=" flex   my-5 bg-green-50  border-current  rounded-lg mx-5 items-center  px-1 py-1 hower:border-red-900 text-2xl text-black text-bold font-mono" >Services</a>
          </Link>

          <Link href="#about">
            <a className=" flex   my-5  mx-5 bg-green-50  border-current  rounded-lg items-center  px-1 py-1 hower:border-red-900 text-2xl text-black text-bold font-mono" >About Us</a>
          </Link>

          <Link href="/">
            <a className=" flex   my-5  mx-5 bg-green-50  border-current  rounded-lg items-center  px-1 py-1 hower:border-red-900 text-2xl text-black text-bold font-mono" >Home</a>
          </Link>



        </nav>




      </header>


    </>


  )
}

export default Navbar