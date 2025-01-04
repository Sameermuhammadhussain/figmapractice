import React from 'react'
import Image from 'next/image'

function Arrival() {
  return (
    <>
    <div className='w-full h-[600px] flex justify-center gap-[60px] px-[100px] bg-[#FFF9E5]'>
        <div className='w-[750px] h-[650px] relative top-[0px]'>
        <Image src={'/asgaard.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
        <div className='mt-[280px]'>
        <div className='text-[24px] font-semibold text-center'>New Arrivals</div>
<div className='text-[48px] font-bold text-center'>Asgaard sofa</div>
<button className='text-[20px] w-[235px] h-[64px] font-semibold ml-[30px] border-2 flex items-center justify-center border-black mt-[30px] cursor-pointer hover:bg-black hover:text-white transition-all'>Order Now</button></div>


    </div>
    </>
  )
}

export default Arrival