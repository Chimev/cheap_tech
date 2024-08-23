import Image from 'next/image';
import React from 'react'
import { FaNairaSign } from "react-icons/fa6";

const ProductCard = () => {
    const price = 1000;
  return (
    <div className='w-[250px] h-[400px] border'>
        <div className='relative h-[70%]'>
            <Image src="/phone.jpg" alt="" fill className=' aspect-auto'/>
        </div>

        <p className='text-3xl'>Samsung S22 ultra </p>
        <div className='flex text-xl'>
          <h5>Normal Price:</h5>  
          <p className='flex items-center gap-1'><FaNairaSign />{price}</p>
        </div>
        <div className='flex text-xl'>
          <h5>Our Price: </h5> 
          <p className='flex items-center gap-1'><FaNairaSign />{price}</p>
        </div>
    </div>
  )
}

export default ProductCard