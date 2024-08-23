import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-between px-7 py-2 bg-[#333333] text-white'>
        <div >
            logo
        </div>

        <div className='flex gap-5 text-3xl'>
            <FaWhatsapp />
            <FaInstagram />
            <FaTiktok />
        </div>
    </nav>
  )
}

export default Navbar