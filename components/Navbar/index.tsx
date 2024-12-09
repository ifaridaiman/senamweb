import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-[1080px] mx-auto py-4'>
        <div>
            <Image src={'/assets/logo/SENAM_LOGO.png'} width={100} height={100} alt="LogoImage" />
        </div>
        <div>
            <ul className='flex text-white flex-row gap-4'>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li><a href="/classes">Class Booking</a></li>
                <li><a href="/packages">Packages</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar