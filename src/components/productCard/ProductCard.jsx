import Image from 'next/image';
import React from 'react'
import { FaNairaSign } from "react-icons/fa6";

const ProductCard = () => {
    const price = 750000
  return (
    <div className='w-[48%] h-fit border bg-white'>
        {/* <div className='relative h-auto'>
           
        </div> */}
         <Image src="/phone.jpg" width={500} height={0} className=' aspect-auto'/>

        <h6 className='text-lg font-extrabold mb-1'>Samsung S22 ultra </h6>
        <div className='text-xl justify-between'>
          <span className='font-extrabold flex items-center gap-1 '><FaNairaSign />{price}</span>
          <span className='flex items-center gap-1 line-through text-gray-700'><FaNairaSign />{price}</span>
        </div>
    </div>
  )
}

export default ProductCard