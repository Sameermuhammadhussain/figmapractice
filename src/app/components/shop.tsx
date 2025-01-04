import React from 'react'
import Image from 'next/image'
import { AlignVerticalSpaceAround, Grip, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

function Shop() {
  return (
    <> 
      <div className='w-full'>
        {/* Hero Section */}
        <section className="relative h-[316px] bg-gray-100 flex flex-col items-center justify-center">
          <Image 
            src="/blog.png" 
            alt="Hero Image" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
          <div className="text-center space-y-4 z-[1]">
            <Image 
              src="/log.png" 
              alt="Logo" 
              className="mx-auto mb-4" 
              width={150}  // Add width and height if needed
              height={50}  // Add width and height if needed
            />
            <h1 className="text-4xl md:text-5xl font-medium">Shop</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Home</span>
              <span className="text-gray-400">/</span>
              <span className="font-light"> <Link href={'/singleproduct'} >Shop</Link></span>
            </div>
          </div>
        </section>

        <div className='flex gap-[300px] justify-between items-center w-full h-[100px] pr-[100px] pl-[80px] bg-[#FAF4F4] mt-[50px]'>
          {/* Filter  */}
          <div className='flex gap-[20px] items-center w-[500px]'>
            <SlidersHorizontal size={18}/>
            <div className='text-[20px]'>Filter</div>
            <Grip size={22}/>
            <AlignVerticalSpaceAround strokeWidth={1.75} size={18} />
            <div className=' '>|</div>
            <div className='text-[18px] w-[250px] '>Showing 1–16 of 32 results</div>
          </div>
          {/* Show  */}
          <div className='flex gap-[5px] items-center  w-[450px]'>
            <div className='text-[20px] '>Show</div>
            <button className='w-[55px] h-[55px] text-[20px] bg-white'>16</button>
            <div className='text-[20px] w-[100px] '>Short By</div>
            <button className='w-[188px] h-[55px] text-[20px] bg-white'>Default</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Shop
