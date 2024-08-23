import React from 'react'
import ProductCard from '@/components/productCard/ProductCard'

const ProductSection = () => {
  return (
    <div className=' py-3'>
      <h2 className='text-center text-3xl font-bold'>Available Products</h2>
      <div className='flex gap-2 px-5 py-5'>
        <ProductCard/>
        <ProductCard/>
      </div>
        
    </div>
  )
}

export default ProductSection