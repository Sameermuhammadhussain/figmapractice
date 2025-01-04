import React from 'react'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'


function Blog() {
  return (
    <>
    <div className='w-full'>

        <div className='text-[36px] font-semibold text-center pt-[55px]'>Our Blogs</div>
        <div className='text-[#9F9F9F] text-[16px] font-semibold text-center pt-[13px]'>Find a bright ideal to suit your taste with our great selection</div>
        {/* blogs card  */}
<div className='mt-[64px] flex gap-[0px]  justify-evenly mx-[100px]'>
    {/* b1  */}
    <div>
    <div className='w-[330px] h-[350px]  relative'><Image src={'/b1.png'} alt='hero'  objectFit='cover' layout='fill'  className='rounded-[10px]'/></div>
<div className='text-[20px] mt-[16px] text-center'>Going all-in with millennial design</div>
<div className='flex flex-col justify-center items-center'>
<div className='text-[24px] font-semibold mt-[6px] text-center '>Read More</div>
<div className='border-b-2 border-black w-[120px] h-[10px] '></div></div>
<div className='flex justify-center items-center gap-[10px] mt-[15px]'>
<Clock />
<span>5 min read</span>
<Calendar />
<span>12th Oct 2022</span>
</div>
    </div>
    {/* b2  */}
    <div>
    <div className='w-[330px] h-[350px]  relative'><Image src={'/b2.png'} alt='hero'  objectFit='cover' layout='fill'  className='rounded-[10px]'/></div>
<div className='text-[20px] mt-[16px] text-center'>Going all-in with millennial design</div>
<div className='flex flex-col justify-center items-center'>
<div className='text-[24px] font-semibold mt-[6px] text-center '>Read More</div>
<div className='border-b-2 border-black w-[120px] h-[10px] '></div></div>
<div className='flex justify-center items-center gap-[10px] mt-[15px]'>
<Clock />
<span>5 min read</span>
<Calendar />
<span>12th Oct 2022</span>
</div>
    </div>
    {/* b3  */}
    <div>
    <div className='w-[330px] h-[350px]  relative'><Image src={'/b3.png'} alt='hero'  objectFit='cover' layout='fill'  className='rounded-[10px]'/></div>
<div className='text-[20px] mt-[16px] text-center'>Going all-in with millennial design</div>
<div className='flex flex-col justify-center items-center'>
<div className='text-[24px] font-semibold mt-[6px] text-center '>Read More</div>
<div className='border-b-2 border-black w-[120px] h-[10px] '></div></div>
<div className='flex justify-center items-center gap-[10px] mt-[15px]'>
<Clock />
<span>5 min read</span>
<Calendar />
<span>12th Oct 2022</span>
</div>
    </div>
    
</div>

<div className='h-[50px] w-[104px] flex flex-col gap-[3px]  mt-[75px]  mx-auto mb-[51px]'>
<div className='text-[20px] font-semibold cursor-pointer  w-[120px]  '>View All Post</div>
<div className='border-b-[2px] border-black w-[120px] h-[10px] '></div></div>




    </div>
    </>
  )
}

export default Blog