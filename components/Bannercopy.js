import React from 'react'
import Image from 'next/image'
import banner from "../public/banner.jpg"

function Bannercopy () {
    return (
        <>
            <div>
                <div >
                    <Image src={banner} alt='banner' className='  w-full h-full object-cover absolute bg-fixed mix-blend-overlay' />
                    <div className='p-30 '>
                          <h1 className=' text-black text-6xl font-bold justify-top'>Vision to Reality</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannercopy