"use client"
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent } from 'react'

function Navbar  () {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) =>{
    const router = useRouter()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set("searchTerm", e.target.value)
    const searchQuery = urlParams.toString()
    router.push(`/search?${searchQuery}`)
  }
  return (
    <nav className='px-4 py-4 md:px-12 md:py-6 bg-white text-black'>
        <div className='flex justify-between items-center'>
            <Link href={'/'} className='hidden md:inline-block font-semibold text-lg'>FM Collections</Link>
            <div className='relative max-w-[300px] md:w-[300px]'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                   <Search className='w-4 h-4'/>
                </div>
                <input type='text' onChange={handleChange} placeholder='search' className='h-[36px] relative pl-10 border-[1px]
                border-black/[0.7] text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent'/>
            </div>
            <Link href={"/add-products"}>
              <button className='bg-black text-white rounded-md py-2 px-3 cursor-pointer'>Add Products</button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
