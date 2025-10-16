"use client"
import React, { ChangeEvent, useState } from 'react'
import { addAction } from '../../../utils/addAction'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function AddForm ()  {
    const router = useRouter()
    const [imageUrl, setImageUrl] = useState("")
    async function clienAddAction (formData : FormData){
        const {error, success} = await addAction(formData)
        if(error){
           toast.error(error) 
        }
        if(success){
            toast.success(success)
            router.push('/')
            setImageUrl("")
        }

         }

         function handleImageChange (e : ChangeEvent<HTMLInputElement>) {
                 const file =  e.target.files?.[0];
                 if(file){
                      const filesize = file.size
                    if(Math.round(filesize/1024) > 1024){
                        toast.error("image greater than 1MB not allowed")
                    }else{
                        setImageUrl(URL.createObjectURL(file))
                    }
                    }
        }
  return (
    <form action={clienAddAction} className='w-full max-w-xl mx-auto justify-center items-center flex flex-col space-y-4 mt-3 md:mt-5'>
       {imageUrl && <Image src={imageUrl} alt='img' width={1000} height={1000} className='
       max-w-full max-h-72 object-cover object-center rounded-lg'/>}
       <div  className='flex flex-col w-full'>
           <label> Product Image:</label>
           <input type='file' accept='image/*' name='image' onChange={handleImageChange} className='w-full px-3 py-1.5
           md:py-2 text-black rounded-lg bg-white border border-gray-500'/>
       </div>
       <div className='flex flex-col w-full' >
           <label> Product Name:</label>
           <input type='text' name='name' placeholder='Enter product name'className='w-full px-3 py-1.5
           md:py-2 text-black rounded-lg bg-white border border-gray-500'/>
       </div>
       <div className='flex flex-col w-full'>
           <label> Product Price:</label>
           <input type='number' name='price' placeholder='Enter product price' className='w-full px-3 py-1.5
           md:py-2 text-black rounded-lg bg-white border border-gray-500' />
       </div>
       <div className='flex flex-col w-full'>
           <label> Sellers Link:</label>
           <input type='text' name='link' placeholder='Enter where buyers can find you' className='w-full px-3 py-1.5
           md:py-2 text-black rounded-lg bg-white border border-gray-500'/>
       </div>
       <div className='flex flex-col w-full'>
           <label> Product Description:</label>
           <textarea name='description'  placeholder='Enter product description' rows={4} className='w-full px-3 py-1.5
           md:py-2 text-black rounded-lg bg-white border border-gray-500'> </textarea>
       </div>
       <button className='bg-black text-white w-full px-3 py-2 rounded-md cursor-pointer'>Add Products</button>
    </form>
  )
}

export default AddForm
