import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Hero () {
  return (
    <div className='min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center
     items-center bg-white px-4 md:px-12'>
         <div className='max-w-2xl'>
            <h1 className='text-5xl py-6 md:pt-0 md:text-7xl font-semibold leading-tight'>Timeless elegance on your wrist and Desk</h1>
            <p className='text-gray-700 mt-4'> Discover our curated collection of premium watches, laptop and accessories for those who appreciate
                sophistication and precision
            </p>
            <Link href='#product'>
               <button className='mt-4 bg-black text-white rounded-md cursor-pointer px-3 py-2'>Shop The Collection</button>
            </Link>
         </div>
         <div>
          <Image src='/giorgio-trovato-8krX0HkXw8c-unsplash.jpg' alt='wrist image' width={500} height={500}/>
         </div>
    </div>
  )
}

export default Hero
