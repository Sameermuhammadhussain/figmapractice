import React from 'react'
import Image from 'next/image'


function Pick() {
  return (
    <>
    <div className='w-full'>

        <div className='text-[36px] font-semibold text-center pt-[55px]'>Top Picks For You</div>
        <div className='text-[#9F9F9F] text-[16px] font-semibold text-center pt-[13px]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>
        {/* picks card  */}
<div className='mt-[64px] flex gap-[30px] pl-[50px] '>
    {/* pick1  */}
    <div>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick1.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[14px]'>Trenton modular sofa_3</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    {/* pick2  */}
    <div>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick2.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[14px]'>Granite dining table with dining chair</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    {/* pick3  */}
    <div>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick3.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[14px]'>Outdoor bar table and stool</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    {/* pick4  */}
    <div>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick4.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[14px]'>Plain console with teak mirror</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    
</div>

<div className='h-[50px] w-[104px] flex flex-col gap-[3px]  mt-[70px]  mx-auto mb-[51px]'>
<div className='text-[20px] font-semibold cursor-pointer  '>View More</div>
<div className='border-b-[2px] border-black w-[100px] h-[10px] '></div></div>




    </div>
    </>
  )
}

export default Pick