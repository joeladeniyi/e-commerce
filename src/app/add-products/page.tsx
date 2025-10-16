import React from 'react'
import AddForm from '../components/AddForm'

function AddProductPage () {
  return (
    <div className='px-4  md:px-12 bg-[#F8F9FA] pb-8'>
      <h2 className='text-center font-semibold text-xl pt-8 w-full md:text-2xl max-w-xl'>Add Product</h2>
     <AddForm/>
    </div>
  )
}

export default AddProductPage
