import React from "react";
import Image from "next/image";
import Link from "next/link";

function Side() {
  return (
    <>
      <div className="h-[600px] w-full bg-[#FAF4F4]">


        <div className="w-full h-[380px]   flex justify-center pt-[50px] relative ">
          <div className=" ">
            <Image
              src={"/sidetable.png"}
              alt="hero"
              width={650}
              height={650}
              className="absolute left-[0px] pr-[50px]"
            />
          </div>
          
<div className="">
            <Image
              src={"/sidesofa.png"}
              alt="hero "
              width={650}
              height={650}
              className="absolute right-[150px] pr-[10px]"
/>
          </div>



        </div>

<div className="flex justify-between pl-[100px] pr-[480px]">
   <div>
<div className='text-[36px] font-semibold mt-[60px]'> Side table</div>
<div className="mt-[10px]"> <Link href={'/'} className=" font-semibold text-[24px]  ">View More</Link></div>
<div className='w-[120px]  h-[10px] border-b-[3px] border-black leading-0'></div>
</div>





<div>
<div className='text-[36px] font-semibold mt-[60px]'> Side Table</div>
<div className="mt-[10px]"> <Link href={'/'} className=" font-semibold text-[24px]">View More</Link></div>
<div className='w-[120px]  h-[10px] border-b-[3px] border-black'></div>
</div>
</div>









        {/* main div */}
      </div>
    </>
  );
}

export default Side;
