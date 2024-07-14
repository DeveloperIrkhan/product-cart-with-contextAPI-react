import React from 'react'
import SimpleCard from './SimpleCard';
import ArrayofProduct from './ProductArray';
const Products = ({ }) => {
  return (
    <>
      <h3 className='text-center m-4'>Product Page</h3>
      <div className='border border-2 container d-flex flex-wrap justify-content-center'>
        {ArrayofProduct.map((product) => {
          return (
            <div key={product.id} className="">
              <SimpleCard products={product} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products